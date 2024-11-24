import axios from 'axios';

export function loginWithSpotify() {
  const clientId = process.env.VUE_APP_CLIENT_ID;
  const redirectUri = process.env.VUE_APP_REDIRECT_URI;
  const scopes = "user-read-private user-read-email";
  const state = Math.random().toString(36).substring(2, 15);

  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${scopes}&redirect_uri=${redirectUri}&state=${state}`;
  window.location.href = authUrl;
}


export async function getToken(code) {
  const clientId = process.env.VUE_APP_CLIENT_ID;
  const clientSecret = process.env.VUE_APP_CLIENT_SECRET;
  const redirectUri = process.env.VUE_APP_REDIRECT_URI;

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', redirectUri);

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
  };

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', params, { headers });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el token:', error.response ? error.response.data : error.message);
    throw error;
  }
}


export async function fetchUserProfile(token) {
  try {
    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error al obtener el perfil del usuario:', error.response ? error.response.data : error.message);
    throw error;
  }
}


export async function searchItems(query, token) {
  const response = await axios.get(`https://api.spotify.com/v1/search`, {
    params: {
      q: query,
      type: "track,artist,album",
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
}
