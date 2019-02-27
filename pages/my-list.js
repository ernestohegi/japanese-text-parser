import React, { useState } from "react";
import ReactGA from "react-ga";
import Layout from "../components/sections/Layout";
import ListElement from "../components/List";
import listHelper from "../helpers/list-helper";

const SENTENCES_LIST_KEY = "sentence";

const MyList = () => {
  ReactGA.pageview("/my-list");

  const [userList, setUserList] = useState(
    listHelper.getUserList(SENTENCES_LIST_KEY)
  );

  const hasUserListElements = userList => userList && userList.length > 0;

  const resetList = () => {
    listHelper.resetList(SENTENCES_LIST_KEY);
    setUserList(listHelper.getUserList(SENTENCES_LIST_KEY));
  };

  return (
    <Layout>
      <h2> My List </h2>
      {hasUserListElements(userList) ? (
        <ListElement list={userList} resetList={resetList} />
      ) : (
        <p> No elements in your list </p>
      )}
    </Layout>
  );
};

export default MyList;
