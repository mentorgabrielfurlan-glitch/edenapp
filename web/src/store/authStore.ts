import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

type User = {
  id: string;
  name: string;
  email: string;
};

type State = {
  user: User | null;
  token: string | null;
  loading: boolean;

  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  checkAuth: () => void;
};

export const useAuthStore = create<State>((set) => ({
  user: null,
  token: localStorage.getItem('eden_token'),
  loading: false,

  login: async (email: string, password: string) => {
    set({ loading: true });
    try {
      const response = await axios.post(API_URL + '/auth/login', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('eden_token', token);
      set({ token, user, loading: false });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  register: async (name: string, email: string, password: string) => {
    set({ loading: true });
    try {
      const response = await axios.post(API_URL + '/auth/register', {
        name,
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('eden_token', token);
      set({ token, user, loading: false });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('eden_token');
    set({ token: null, user: null });
  },

  checkAuth: () => {
    const token = localStorage.getItem('eden_token');
    if (token) {
      set({ token });
    }
  },
}));
