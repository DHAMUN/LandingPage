import React, { Component } from 'react';

/* global styles for app */
import './styles/homeapp.scss';

/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export class HomeApp extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {

    window.stuff = this;

    return (
      <section>
        <Header 
          titleData={["DHAMUN", "/"]}
          leftLinks={[["Home", "/home/"], ["Log In", "/home/login/"]]} 
          rightLink={["Dashboard", "/dashboard", true]} 
        />
        {this.props.children}
        <Footer text="This is DHAMUN Portal" />
      </section>
    );
  }
}
