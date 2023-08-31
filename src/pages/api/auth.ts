// api/auth.ts

import axios from 'axios';

const BASE_URL = 'https://localhost:32768/api/Auth';

export async function register(email: string, password: string): Promise<string> {
  const response = await axios.post(`${BASE_URL}/register`, { email, password });
  return response.data.token;
}

export async function login(email: string, password: string): Promise<string> {
  const response = await axios.post(`${BASE_URL}/login`, { email, password });
  return response.data.token;
}
