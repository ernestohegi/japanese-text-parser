import React, { useState } from 'react'
import ReactGA from 'react-ga'
import ListElement from '../components/List'
import { getUserList, resetList } from '../helpers/list-helper'

const SENTENCES_LIST_KEY = 'sentence'

const MyList = () => {
  ReactGA.pageview('/my-list')

  const [userList, setUserList] = useState(
    getUserList(SENTENCES_LIST_KEY)
  )

  return (
    <>
      <h2> My List </h2>
      {!!userList?.length ? (
        <ListElement list={userList} resetList={() => {
          resetList(SENTENCES_LIST_KEY)
          setUserList(getUserList(SENTENCES_LIST_KEY))
        }} />
      ) : (
        <p> No elements in your list </p>
      )}
    </>
  )
}

export default MyList
