import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Socket } from 'components/Socket';
import { ResolutionPicker } from 'components/ResolutionPicker';
import { ResolutionStats } from 'components/ResolutionStats';


import * as actionCreators from 'actions/resolutions';

const metaData = {
  title: 'DHAMUN',
  description: 'Get started here',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

@connect(
  (state) => ({
    token: state.auth.token,
    resolutions: state.resolutions.items,
    country: state.auth.country,
    userLevel: state.auth.userLevel
  }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class ResolutionsAction extends Component {

  render() {
    return (

      <section>

        <Socket {...this.props} />
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <h1>
                Stats for {this.props.params.name}
              </h1>

            </div>

          </div>   
          <ResolutionStats {...this.props} />
       

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6
                            col-md-offset-3 col-lg-offset-3">
              <h1>
                Sign {this.props.params.name}
              </h1>
            </div>


          </div>
          <ResolutionPicker {...this.props} />  
             
        </div>

      </section>
    );
  }
}