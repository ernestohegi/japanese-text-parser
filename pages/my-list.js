import React from 'react';
import Layout from './components/Layout';
import ListElement from './components/ListElement';
import listHelper from './helpers/list-helper';

class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      userList: listHelper.getUserList()
    });
  }

  render() {
    return (
      <Layout>
        <h2> My List </h2>
        {
          (this.state.userList && this.state.userList.length > 0) ?
            <ListElement list={this.state.userList} /> :
            <p> No elements in your list </p>
        }
      </Layout>
    );
  }
}

export default MyList;
