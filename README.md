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

### Option 1: Using Expo Snack (Recommended for quick testing)

1. Open the project on [snack.expo.dev](https://snack.expo.dev/)
2. Upload all the project files to the snack
3. Replace `'YOUR_API_KEY_HERE'` in `api.js` with a valid API key for a generative AI service (like Google Gemini)
4. Click "Run" to start the app

### Option 2: Running Locally (Requires Node.js and Expo CLI)

#### For Windows Users (especially with nvm):

1. If you're using nvm-windows, ensure Node.js is installed:
   ```
   nvm list
   nvm install latest
   nvm use latest
   ```

2. Verify Node.js and npm installation:
   ```
   node --version
   npm --version
   ```

3. If npm is not recognized, try reinstalling Node.js from [nodejs.org](https://nodejs.org/)

4. Install Expo CLI globally:
   ```
   npm install -g expo-cli
   ```

5. Install project dependencies:
   ```
   npm install
   ```

6. Start the development server:
   ```
   npm start
   ```
   or
   ```
   expo start
   ```

7. Follow the instructions in the terminal to run on an emulator or physical device

Note: The app uses environment variables for the API key. Make sure your `.env` file is properly configured.

## Testing the Application

### Testing API Integration

To test the API integration:

1. Ensure you have Node.js installed
2. Install dependencies:
   ```
   npm install
   ```
3. Run the test script:
   ```
   npm run test:api
   ```

This will test the API integration with a sample query and display the results.

### Testing Environment Variables

To verify that environment variables are loaded correctly in the Expo environment:

1. Import the test function in your Expo app:
   ```javascript
   import { testEnvironmentVariables } from './test-env';
   ```

2. Call the function to verify environment variables:
   ```javascript
   testEnvironmentVariables();
   ```

The function will log the status of environment variable loading to the console.

## Prompt Strategy

The prompt sent to the AI is designed to be clear and specific. It includes:
1.  **Role-playing**: "You are an AI product advisor."
2.  **Context**: The entire product catalog is provided as a JSON string.
3.  **User's Request**: The user's query is embedded directly into the prompt.
4.  **Output Formatting**: The prompt explicitly asks for the output to be in a valid JSON format, specifying the fields required for each recommended product. This makes parsing the response on the client-side reliable.

## Environment Variables

To use environment variables in this project:

1. Create a `.env` file in the project root with your API key:
   ```
   API_KEY=your_actual_api_key_here
   ```

2. The application will automatically use the API key from the `.env` file.

Note: The `.env` file is included in `.gitignore` to prevent it from being committed to the repository.
