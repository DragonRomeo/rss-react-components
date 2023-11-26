import { createContext, useContext } from 'react';
import { Products } from '../components/MainPage/Results/Results';

type Data = {
  limit: number;
  products: Array<Products>;
  skip: number;
  total: number;
};

export interface IContext {
  search?: string;
  page: string;
  perPage: string;
  data?: Data;
  error: Error | null;
  isLoading: boolean;
  total: number;
  skipValue?: number;
}
export const DataContext = createContext<IContext | null>(null);
export const useDataContext = (): IContext => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('Context is not provided!!!!!!!!!!!!!!!!');
  }
  return context;
};
