import React from 'react';


export default function withBackgroundBlur(Component, queryToBlur) {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.elementsToBlur = [...document.querySelectorAll(queryToBlur)];
    }

    componentDidMount() {
      this.elementsToBlur.map(el => el.style.filter = 'blur(5px)');

    }

    componentWillUnmount() {
      this.elementsToBlur.map(el => el.style.filter = 'none');
    }

    render() {
      return(
        <Component {...this.props} />
      )
    }
  }

  return HOC;
}