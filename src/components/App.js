import React from 'react';
import Header from './Header';
import Content from './Content';

export default class App extends React.Component {
  render() {
    let name = 'huna';
    return(
      <div>
        <Header title={ this.props.headerTitle }/>
        <Content
          title={ this.props.contentTitle}
          body={ this.props.contentBody }
        />
      </div>
    );
  }
}

App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody'
}
