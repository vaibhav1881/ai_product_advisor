/**
 * Simple test script to verify environment variable loading in Expo
 * This script can be imported in your Expo app to verify that environment variables are loaded correctly
 */

// Test function to verify environment variables
export const testEnvironmentVariables = () => {
  console.log('Testing environment variable loading...');
  
  // Check if API key is available
  const apiKey = process.env.EXPO_PUBLIC_API_KEY || process.env.API_KEY;
  
  if (apiKey) {
    console.log('API Key found: ', apiKey.substring(0, 10) + '...'); // Log only first 10 characters for security
    console.log('Environment variables loaded successfully!');
    return true;
  } else {
    console.error('API Key not found in environment variables');
    console.log('Please ensure you have a .env file with API_KEY or EXPO_PUBLIC_API_KEY');
    return false;
  }
};

// Export a component that can be used in the app for visual testing
export const EnvironmentTestComponent = () => {
  const isEnvLoaded = testEnvironmentVariables();
  
  return `
    <View style={{ padding: 20, backgroundColor: '#f0f0f0' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Environment Variable Test
      </Text>
      <Text>
        Status: ${isEnvLoaded ? '✅ Success' : '❌ Failed'}
      </Text>
      <Text>
        API Key Available: ${isEnvLoaded ? 'Yes' : 'No'}
      </Text>
    </View>
  `;
};