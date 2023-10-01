import React, { Component } from 'react'



import { UserProvider } from './Context';


export default class ComA extends Component {
  render() {
    return (
    <UserProvider value={"tushar"}>
        <ComB/>
    </UserProvider>
    );
  }
}
