import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import {connect} from 'react-redux'

/* components */
import { TopImage } from 'components/TopImage';
import { Tools } from 'components/Tools';

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

class Home extends Component {
  render() {

    window.stuff = this.props;

    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage imgType="outsideun" header="DHAMUN" subtitle="A portal for all your needs" />
        <Tools />
      </section>
    );
  }
}
