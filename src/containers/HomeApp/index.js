import React, { Component } from 'react';
import actions from "actions/auth";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

/* global styles for app */
import './styles/homeapp.scss';

/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

class HomeApp extends Component {
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

function mapStateToProps(state){
  return state;
}

function mapActionsToProps(dispatch){
  cons

  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapActionsToProps)(HomeApp)
