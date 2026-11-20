const API_BASE_URL = 'http://localhost:3000/v1';
const MEDIA_BASE_URL = 'http://localhost:3000';

export const resolveImageUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return `${MEDIA_BASE_URL}${path}`;
};

export const getCategories = async (onlyMenu = true) => {
  const query = onlyMenu ? '?use_in_menu=true' : '';
  const response = await fetch(`${API_BASE_URL}/category/search${query}`);
  if (!response.ok) {
    throw new Error('Erro ao buscar categorias');
  }
  return response.json();
};

export const getProducts = async (filters = {}) => {
  const params = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.append(key, value);
    }
  });

  const queryString = params.toString();
  const url = `${API_BASE_URL}/product/search${queryString ? `?${queryString}` : ''}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }
  return response.json();
};

export const getProductById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/product/${id}`);
  if (!response.ok) {
    throw new Error('Produto não encontrado');
  }
  return response.json();
};

export const loginUser = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/user/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Falha na autenticação');
  }
  return data;
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Erro ao cadastrar usuário');
  }
  return data;
};