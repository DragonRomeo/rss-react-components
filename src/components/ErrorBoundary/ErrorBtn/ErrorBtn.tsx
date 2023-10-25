import React, { Component } from 'react';

type Props = {
  children?: JSX.Element;
};

type State = {
  btnIsClicked: boolean;
};

export default class ErrorBtn extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);
    this.state = {
      btnIsClicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ btnIsClicked: true });
  }

  render() {
    if (this.state.btnIsClicked) {
      throw new Error('Yey Error boundary catch me');
    }
    return (
      <div className="errorBtnWrapper">
        <p className="errorBtnTooltip">Dont click {'=>'} </p>
        <button className="errBtn" onClick={this.handleClick}></button>
      </div>
    );
  }
}
