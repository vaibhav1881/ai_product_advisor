# AI Product Advisor React Native App – Build Instructions for Generative AI

## Goal

Build a **React Native application** (using [snack.expo.dev](https://snack.expo.dev/)) that acts as an **AI Product Advisor**. The user should describe their needs in **plain English**, and the app should recommend the best products from the provided `PRODUCT_CATALOG` (`skus.json`) along with **reasons why** they are recommended.

---

## Requirements

### **Core Features**

1. **User Interface:**

   - Text input where the user can describe their needs (e.g., "I need a lightweight laptop for travel with a long battery life").
   - Button to submit the query.
   - Scrollable view to display AI-generated recommendations.

2. **Product Catalog:**

   - Use the provided `skus.json` as the product database.
   - Each product object contains:
     ```json
     {
       "brand": "string",
       "product_name": "string",
       "price": number,
       "category": "string",
       "description": "string"
     }
     ```

3. **AI Integration:**

   - Integrate with a **Generative AI model** (Google Gemini, OpenAI GPT-4o, Claude, etc.).
   - Construct a prompt that includes:
     - The **full product catalog**.
     - The **user's query**.
     - A request for recommendations in **JSON format**.

4. **Recommendation Display:**

   - Show for each recommended product:
     - Product name
     - Brand
     - Price
     - Category
     - Key features/description
     - Reason why it matches the user’s query
   - Use styled product cards for better presentation.

---

## Prompt to Send to AI

```plaintext
You are an AI product advisor.
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
Respond ONLY in valid JSON format.
```

---

## Architecture

**Components:**

1. `App.js`

   - Entry point.
   - Sets up navigation and state provider (if needed).

2. `SearchScreen.js`

   - Contains:
     - `TextInput` for query.
     - Button to trigger AI call.
     - Loading indicator.
     - Recommendation list.

3. `ProductCard.js`

   - Displays individual product details and reasoning.

4. `data.js`

   - Contains the `PRODUCT_CATALOG` array loaded from `skus.json`.

5. `api.js`

   - Handles API calls to the AI model.

---

## Implementation Steps

1. **Setup Environment:**

   - Open [snack.expo.dev](https://snack.expo.dev/)
   - Create a new React Native project.

2. **Add Product Catalog:**

   - Create `data.js`.
   - Export the parsed `PRODUCT_CATALOG` from `skus.json`.

3. **Create API Function:**

   - In `api.js`, implement `fetchRecommendations(userQuery)`:
     - Build the prompt.
     - Call the AI API using `fetch`.
     - Parse and return JSON response.

4. **UI for Search:**

   - In `SearchScreen.js`:
     - Add `TextInput` for query.
     - Add a search button.
     - On submit, call `fetchRecommendations`.
     - Show loading state.
     - Render results using `<ProductCard />`.

5. **ProductCard Component:**

   - Create `ProductCard.js`.
   - Accept `name`, `brand`, `price`, `category`, `features`, and `reason` as props.
   - Display in a styled card.

6. **State Management:**

   - Use React's `useState` and `useEffect` for local state.
   - Keep track of:
     - `query` (string)
     - `recommendations` (array)
     - `loading` (boolean)
     - `error` (string)

7. **Error Handling:**

   - If API fails, show an error message.

8. **Styling:**

   - Use `StyleSheet` to create a clean, modern UI.
   - Add padding, margins, shadows for cards.

---

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

---

## README.md Contents (for final submission)

- **Architecture** – High-level overview.
- **Approach** – Why certain libraries & design patterns were chosen.
- **File Structure**.
- **Running Instructions** – "Open in snack.expo.dev and run".
- **Prompt Strategy** – How AI prompt was designed.

---

## Submission Guidelines

1. Zip the **entire project folder**.
2. Include:
   - `README.md`
   - `ai_conversation_log.md` (your AI conversation history).
3. Upload ZIP to Google Drive.
4. Share **public link** in the form.

---

## Tips for AI Assistant While Building

- Use **functional components** + React Hooks.
- Ensure **mobile responsiveness**.
- Keep `PRODUCT_CATALOG` static in `data.js`.
- Parse AI's JSON output safely (`try...catch`).
- Use a visually appealing card design.

