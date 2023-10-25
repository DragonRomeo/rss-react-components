import './assets/styles/global.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
// import MainPage from './components/MainPage/MainPage';

export const App = () => {
  return (
    <>
      <ErrorBoundary />
    </>
  );
};
