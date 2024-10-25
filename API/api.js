const BASE_URL = 'http://<Your API address>/api/rules'; // Change the API 

// Create Rule
export const createRule = async (ruleString) => {
  try {
    const response = await fetch(`${BASE_URL}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rule: ruleString }),
    });
    if (!response.ok) {
      throw new Error('Error creating rule');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in createRule:', error);
    throw error;
  }
};

// Combine Multiple Rules
export const combineRules = async (rules) => {
  try {
    const response = await fetch(`${BASE_URL}/combine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rules }),
    });
    if (!response.ok) {
      throw new Error('Error combining rules');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in combineRules:', error);
    throw error;
  }
};

// Evaluate Rule
export const evaluateRule = async (ruleAST, userData) => {
  try {
    const response = await fetch(`${BASE_URL}/evaluate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ruleAST, userData }),
    });
    if (!response.ok) {
      throw new Error('Error evaluating rule');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in evaluateRule:', error);
    throw error;
  }
};

// Fetch All Rules
export const fetchAllRules = async () => {
  try {
    const response = await fetch(`${BASE_URL}/allRules`);
    if (!response.ok) {
      throw new Error('Error fetching all rules');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in fetchAllRules:', error);
    throw error;
  }
};

export const updateRule = async (ruleId, updatedRule) => {
  try {
    const response = await fetch(`${BASE_URL}/${ruleId}/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rule: updatedRule }),
    });
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error updating rule: ${response.status} ${response.statusText} - ${errorText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in updateRule:', error);
    throw error;
  }
};

