import { Component, ErrorInfo } from 'react';
import MainPage from '../MainPage/MainPage';
import ErrorBtn from './ErrorBtn/ErrorBtn';
// ErrorBtn

type Props = {
  children?: JSX.Element;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error);
    console.log('поймал ошибку');
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log(error, errorInfo);
    console.log('поймал ошибку');
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <h1>Ну вот, ты все выключил(а), вселенную считай сломал(а)</h1>;
    }

    return (
      <>
        <MainPage></MainPage>
        <ErrorBtn></ErrorBtn>
      </>
    );
  }
}
