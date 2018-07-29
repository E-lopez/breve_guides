import React from 'react';
import { Root } from './app/config/router'

export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Root />
    );
  }
}
