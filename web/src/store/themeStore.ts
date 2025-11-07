import { create } from 'zustand';

type ThemeState = {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  isDark: localStorage.getItem('eden_theme') === 'dark',

  toggleTheme: () => set((state) => {
    const newTheme = !state.isDark;
    localStorage.setItem('eden_theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
    return { isDark: newTheme };
  }),

  setTheme: (isDark: boolean) => {
    localStorage.setItem('eden_theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
    set({ isDark });
  },
}));
