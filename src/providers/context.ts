import { createContext, useContext } from 'react';
import { Products } from '../components/MainPage/Results/Results';

export interface IContext {
  search: string;
  page: string;
  perPage: string;
  items: Array<Products>;
  error: Error | null;
  isLoad: boolean;
  total: number;
}
export const DataContext = createContext<IContext | null>(null);
export const useDataContext = (): IContext => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('Context is not provided!!!!!!!!!!!!!!!!');
  }
  return context;
};
