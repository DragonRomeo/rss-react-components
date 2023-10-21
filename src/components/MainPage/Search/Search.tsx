import React, { Component } from 'react';

type Props = {};

type State = {};

export default class Search extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className='searchContainer'>
        <input type="text" />
        <button>search</button>
      </div>
    );
  }
}
