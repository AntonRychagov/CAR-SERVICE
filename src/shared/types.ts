import { Theme } from '@mui/material/styles';

// интерфейс для ThemeStore
export interface ThemeStoreInterface {
  darkMode: boolean;
  theme: Theme;
  toggleTheme: () => void;
  createAppTheme: () => Theme;
}

// интерфейс для SearchStore
export interface SearchStoreInterface {
  searchTerm: string;
  showError: boolean;
  rootStore: any;
  setSearchTerm: (term: string) => void;
  setShowError: (show: boolean) => void;
  handleSearch: (availableServices: string[], navigate: any) => void;
}

// интерфейс для RootStore
export interface RootStoreInterface {
  themeStore: ThemeStoreInterface;
  searchStore: SearchStoreInterface;
}

// интерфейс для SearchBox
export interface SearchBoxProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: () => void;
  handleKeyDown: (event: React.KeyboardEvent) => void;
  placeholder?: string;
}

// интерфейс для ErrorBox
export interface ErrorBoxProps {
  showError: boolean;
  onHideError: () => void;
}

// интерфейс для DrawerContent
export interface DrawerContentProps {
  handleLinkClick: () => void;
  handleDrawerToggle: () => void;
  isAuthenticated: boolean;
}

// интерфейс для ServiceCard
export interface ServiceCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  onClick?: (id: number) => void;
}

// тип для YandexMap
export type YandexMapProps = {
  apiKey?: string;
};

export type IFormInput = {
  email: string;
  password: string;
};
