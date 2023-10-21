import { Component } from 'react';
import Search from './Search/Search';
import Results from './Results/Results';

class MainPage extends Component {
  render() {
    return (
      <div className="mainPage">
        <Search />
        <Results />
      </div>
    );
  }
}

export default MainPage;
