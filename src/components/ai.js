import axios from "axios";


export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  try {
    const response = await axios.post(
      "https://api.cohere.ai/v1/chat",
      {
        message: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
        chat_history: [],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_HF_ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    return response.data.text; // or response.data.generation depending on model
  } catch (err) {
    console.error("Cohere API Error:", err);
    return "Oops! Something went wrong.";
  }
}
