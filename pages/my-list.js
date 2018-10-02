import React from "react";
import ReactGA from "react-ga";
import Layout from "../components/sections/Layout";
import ListElement from "../components/List";
import listHelper from "../helpers/list-helper";

const SENTENCES_LIST_KEY = "sentence";

class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setUserList();
    ReactGA.pageview("/my-list");
  }

  hasUserList() {
    return this.state.userList && this.state.userList.length > 0;
  }

  resetList() {
    listHelper.resetList(SENTENCES_LIST_KEY);

    this.setUserList();
  }

  setUserList() {
    this.setState({
      userList: listHelper.getUserList(SENTENCES_LIST_KEY)
    });
  }

  render() {
    return (
      <Layout>
        <h2> My List </h2>
        {this.hasUserList() ? (
          <ListElement
            list={this.state.userList}
            resetList={this.resetList.bind(this)}
          />
        ) : (
          <p> No elements in your list </p>
        )}
      </Layout>
    );
  }
}

export default MyList;
