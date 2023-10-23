import { Component } from 'react';
import Search from './Search/Search';
import Results from './Results/Results';

type Props = {
  children?: JSX.Element;
};

type State = {
  search: string;
};

class MainPage extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      search: 'empty',
    };
  }

  updateData = (value: string) => {
    this.setState({ search: value });
  };

  componentDidMount(): void {
    console.log(this.state.search);
  }

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
