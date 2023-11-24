import axios from 'axios';

export const uri = 'http://127.0.0.1:8000/api';

export const api = axios.create({
  baseURL: uri,
});

export const getCouples = async () => {
  const data = await api.get('/parejas');
  return data.data;
};

export const getCouple = async (slug: any) => {
  const data = await api.get(`/parejas/${slug}`);
  return data.data;
};
