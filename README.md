# AI Product Advisor React Native App

## Architecture

This React Native application is built using Expo and follows a component-based architecture.

- **`App.js`**: The main entry point that renders the `SearchScreen`.
- **`SearchScreen.js`**: The primary UI component for user interaction. It manages state for the search query, recommendations, loading status, and errors.
- **`ProductCard.js`**: A presentational component responsible for displaying a single product recommendation in a styled card format.
- **`api.js`**: A module to handle all interactions with the generative AI API. It constructs the prompt and fetches recommendations.
- **`data.js`**: This module loads and exports the product catalog from `skus.json`.

## Approach

- **React Native with Expo**: Chosen for its rapid development capabilities and ease of setup, especially with `snack.expo.dev`.
- **Functional Components and Hooks**: `useState` and `useEffect` are used for state management within the `SearchScreen` component, which is a modern and standard approach in React development.
- **Component-Based Structure**: The UI is broken down into reusable components (`SearchScreen`, `ProductCard`) for better organization and maintainability.
- **Centralized API Logic**: All API interactions are handled in `api.js` to separate concerns and make the code cleaner.

## File Structure

```
/project-root
│── App.js
│── SearchScreen.js
│── ProductCard.js
│── data.js
│── api.js
│── skus.json
│── README.md
│── ai_conversation_log.md
```

## Running Instructions

Open the project on [snack.expo.dev](https://snack.expo.dev/) and run it. You will need to replace `'YOUR_API_KEY'` in `api.js` with a valid API key for a generative AI service (like Google Gemini).

## Prompt Strategy

The prompt sent to the AI is designed to be clear and specific. It includes:
1.  **Role-playing**: "You are an AI product advisor."
2.  **Context**: The entire product catalog is provided as a JSON string.
3.  **User's Request**: The user's query is embedded directly into the prompt.
4.  **Output Formatting**: The prompt explicitly asks for the output to be in a valid JSON format, specifying the fields required for each recommended product. This makes parsing the response on the client-side reliable.
