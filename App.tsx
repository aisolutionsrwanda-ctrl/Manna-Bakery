import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

interface Recipe {
  recipeName: string;
  description: string;
  ingredients: string[];
  instructions: string[];
}

function App() {
  const [ingredients, setIngredients] = useState('');
  const [mealType, setMealType] = useState('any');
  const [diet, setDiet] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [recipeImage, setRecipeImage] = useState('');

  const handleDietChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setDiet([...diet, value]);
    } else {
      setDiet(diet.filter((d) => d !== value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setRecipe(null);
    setRecipeImage('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      
      const dietText = diet.length > 0 ? `It should be ${diet.join(', ')}. ` : '';
      const mealTypeText = mealType !== 'any' ? `It should be a ${mealType}. ` : '';
      
      const prompt = `Generate a creative recipe using the following ingredients: ${ingredients}. ${mealTypeText}${dietText}Provide a unique name for the dish and a short, enticing description. When listing the ingredients for the recipe, use appropriate units. For items that are not typically measured in cups or spoons, such as whole potatoes, yams, or cassava, just list the ingredient name or a sensible quantity like '1 large potato'.`;

      const recipeResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              recipeName: { type: Type.STRING },
              description: { type: Type.STRING },
              ingredients: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              instructions: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
            },
            required: ['recipeName', 'description', 'ingredients', 'instructions'],
          },
        },
      });

      let recipeJsonText = recipeResponse.text.trim();
      // Clean potential markdown fences
      const jsonMatch = recipeJsonText.match(/```json\n([\s\S]*?)\n```/);
      if (jsonMatch) {
        recipeJsonText = jsonMatch[1];
      }

      const parsedRecipe = JSON.parse(recipeJsonText);
      setRecipe(parsedRecipe);

      // Generate an image for the recipe
      const imageResponse = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: `A delicious, photorealistic image of ${parsedRecipe.recipeName}, described as: ${parsedRecipe.description}`,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/jpeg',
          aspectRatio: '1:1',
        },
      });

      if (imageResponse.generatedImages && imageResponse.generatedImages.length > 0) {
        const base64ImageBytes = imageResponse.generatedImages[0].image.imageBytes;
        setRecipeImage(`data:image/jpeg;base64,${base64ImageBytes}`);
      }

    } catch (err) {
      console.error(err);
      setError('Sorry, something went wrong while generating the recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>UNCLE'S RESTAURANT KITCHEN RECIPE</h1>
        <p>Enter your ingredients and let AI create a culinary masterpiece for you!</p>
      </header>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="ingredients">Ingredients You Have</label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="e.g., chicken breast, tomatoes, basil, garlic"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mealType">Meal Type</label>
            <select id="mealType" value={mealType} onChange={(e) => setMealType(e.target.value)}>
              <option value="any">Any</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="dessert">Dessert</option>
            </select>
          </div>
          <div className="form-group">
            <label>Dietary Preferences</label>
            <div className="diet-options">
              <label><input type="checkbox" value="vegetarian" checked={diet.includes('vegetarian')} onChange={handleDietChange} /> Vegetarian</label>
              <label><input type="checkbox" value="vegan" checked={diet.includes('vegan')} onChange={handleDietChange} /> Vegan</label>
              <label><input type="checkbox" value="gluten-free" checked={diet.includes('gluten-free')} onChange={handleDietChange} /> Gluten-Free</label>
            </div>
          </div>
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Generating...' : 'Create Recipe'}
          </button>
        </form>
      </div>

      <div className="output-section">
        {loading && (
          <div className="loader">
            <div className="cooking"></div>
            <p>Cooking up your recipe...</p>
          </div>
        )}
        {error && <div className="error-message">{error}</div>}
        {!loading && !error && !recipe && (
            <div className="placeholder">
                <p>Your delicious recipe will appear here!</p>
            </div>
        )}
        {recipe && (
          <div className="recipe-card" aria-live="polite">
            {recipeImage && <img src={recipeImage} alt={recipe.recipeName} />}
            <div className="recipe-content">
              <h2>{recipe.recipeName}</h2>
              <p className="description">{recipe.description}</p>
              <div className="recipe-details">
                <div>
                  <h3>Ingredients</h3>
                  <ul>
                    {(recipe.ingredients || []).map((ing, i) => <li key={i}>{ing}</li>)}
                  </ul>
                </div>
                <div>
                  <h3>Instructions</h3>
                  <ol>
                    {(recipe.instructions || []).map((step, i) => <li key={i}>{step}</li>)}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;