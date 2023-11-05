import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { Results } from '../components/MainPage/Results/Results';
import { NotFoundPage } from '../pages/NotFoundPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/rss-react-components" element={<ErrorBoundary />}>
          <Route index element={<HomePage />}></Route>

          <Route path="/rss-react-components/results" element={<Results />}></Route>

          <Route path="/rss-react-components*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
