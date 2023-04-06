import React from 'react'

const ListUsers = ({user}) => {
  const { name: { first, last } } = user;
  return (
    <>
      <li><p>FirstName: {first}</p></li>
      <li><p>LastName: {last}</p></li>
    </>
  )
}

export default ListUsers