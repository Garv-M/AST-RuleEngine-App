import axios from 'axios';

// Set your backend base URL
const api = axios.create({
  baseURL: 'http://192.168.29.37:8080/api/rules',  // Update with your backend URL
});

// Create Rule
export const createRule = async (ruleString) => {
  try {
    const response = await api.post('/create', { rule: ruleString });
    return response.data;
  } catch (error) {
    console.error('Error creating rule:', error);
    throw error;
  }
};

// Combine Multiple Rules
export const combineRules = async (rules) => {
  try {
    const response = await api.post('/combine', { rules });
    return response.data;
  } catch (error) {
    console.error('Error combining rules:', error);
    throw error;
  }
};

// Combine All Rules
export const combineAllRules = async () => {
  try {
    const response = await api.get('/combine/all');
    return response.data;
  } catch (error) {
    console.error('Error combining all rules:', error);
    throw error;
  }
};

// Evaluate Rule
export const evaluateRule = async (ruleAST, userData) => {
  try {
    const response = await api.post('/evaluate', {
      ruleAST,
      userData,
    });
    return response.data;
  } catch (error) {
    console.error('Error evaluating rule:', error);
    throw error;
  }
};
