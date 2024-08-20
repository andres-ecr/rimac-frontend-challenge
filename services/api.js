const BASE_URL = 'https://rimac-front-end-challenge.netlify.app/api';

const fetchData = async (endpoint) => {
  const url = `${BASE_URL}${endpoint}`;
  try {
    const response = await fetch(url, { method: 'GET', timeout: 10000 });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchUserData = async () => {
  return await fetchData('/user.json');
};

export const fetchPlansData = async () => {
  return await fetchData('/plans.json');
};
