/**
 * Simple test script to verify API functionality
 * This script can be run with Node.js to test the API integration
 */

// Import the API function (in Expo, process.env is available globally)
const { fetchRecommendations } = require('./api');

// Test function
async function testApi() {
  console.log('Testing API integration...');
  
  try {
    // Test with a sample query
    const testQuery = "I need a laptop for programming";
    console.log(`Testing with query: "${testQuery}"`);
    
    const recommendations = await fetchRecommendations(testQuery);
    console.log('API Response:', JSON.stringify(recommendations, null, 2));
    console.log('API integration test completed successfully!');
  } catch (error) {
    console.error('API test failed:', error.message);
    console.log('Please check your API key and network connection');
  }
}

// Run the test
testApi();