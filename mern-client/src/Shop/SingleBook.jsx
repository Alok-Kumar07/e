// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id, bookTitle, imageURL} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <img src={imageURL}/>
        <h2>{bookTitle}</h2>
        <p>{_id}</p>
    </div>
  )
}

export default SingleBook