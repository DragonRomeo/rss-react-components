import { Component } from 'react';
import { MainPage } from '../MainPage/MainPage';

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
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ну вот, ты все выключил(а), вселенную считай сломал(а)</h1>;
    }

    return (
      <>
        <MainPage></MainPage>
      </>
    );
  }
}
