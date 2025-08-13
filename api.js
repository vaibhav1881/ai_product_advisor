import { PRODUCT_CATALOG } from './data';

// In Expo, environment variables are accessed via process.env
// For web targets, you need to prefix with EXPO_PUBLIC_ in the .env file
const API_KEY = process.env.EXPO_PUBLIC_API_KEY || process.env.API_KEY || 'YOUR_API_KEY_HERE'; // Use environment variable or placeholder
const API_URL = 'https://api.generativeai.com/v1/models/gemini-pro:generateContent'; // Replace with your AI model endpoint

const fetchRecommendations = async (userQuery) => {
  const prompt = `You are an AI product advisor.
Given this product catalog: ${JSON.stringify(PRODUCT_CATALOG)},
and this user request: "${userQuery}",
recommend the top 3 most suitable products.
For each recommendation, provide:
1. Product name
2. Brand
3. Price
4. Category
5. Key features (from description)
6. Why it matches the user's request
Respond ONLY in valid JSON format.`;

  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const jsonResponse = data.candidates[0].content.parts[0].text;
    return JSON.parse(jsonResponse);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    throw error;
  }
};

export { fetchRecommendations };
