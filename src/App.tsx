import { Component } from 'react';
import './assets/styles/global.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

export class App extends Component {
  render() {
    return (
      <>
        <ErrorBoundary />
      </>
    );
  }
}
