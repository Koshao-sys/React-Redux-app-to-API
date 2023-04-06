import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ListUsers from './ListUsers';

const ShowUsers = () => {
  const { users } = useSelector((store) => store.user);
  return (
    <ul>
      {
      users.results.map((user) => {
        const id = uuidv4();
        return <ListUsers key={id} user={user}/>
      })
      }
    </ul>
  )
}

export default ShowUsers;