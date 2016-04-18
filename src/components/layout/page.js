import React from 'react';
import { connect } from 'react-redux';

import Header from './header/index';
import Subnav from './subnav';

import { fetchWindowUser } from '../../data/user/actions';

class Page extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchWindowUser()); // TODO move to another global component
  }

  render() {
    const {pageHead, pageContent, user} = this.props;

    return (
      <div className="page">
        <Header user={user}/>
        <Subnav>
          {pageHead}
        </Subnav>
        <hr/>
        {pageContent}
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.drone.user
  })
)(Page);
