import { Component } from 'react';
import Search from './Search/Search';
import Results from './Results/Results';

type Props = {
  children?: JSX.Element;
};

type State = {
  search: number;
};

class MainPage extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      search: 0,
    };
  }

  updateData = (value: number) => {
    this.setState({ search: value });
  };

  render() {
    return (
      <div className="mainPage">
        <Search updateData={this.updateData} />
        <Results data={this.state.search} />
      </div>
    );
  }
}

export default MainPage;
