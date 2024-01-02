// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Button, Label, Select, TextInput } from 'flowbite-react';
import { Textarea } from 'flowbite-react';


const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobibliography",
    "Art and Design",
    "Religion",
    "Travel",
    "Memoir",
    "Self-help"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) =>{
    //console.log(event.target.value);
    setSelectedBookCategory(event.target.value)
  }

  //handal book submission
  const handleBookSubmit = (event) =>{
    event.preventDefault();
    const from = event.target;

    const bookTitle = from.bookTitle.value;
    const authorName = from.authorName.value;
    const imageURL = from.imageURL.value;
    const category = from.categoryName.value;
    const bookDescription = from.bookDescription.value;
    const pdfURL = from.pdfURL.value;
    
    const bookObj = {
      bookTitle,authorName,imageURL, category, bookDescription,pdfURL
    }
    console.log(bookObj);

    //send data to db
    fetch("http://localhost:5000/upload-book", {
      method:"POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    // eslint-disable-next-line no-unused-vars
    }).then(res => res.json()).then(data => {
      alert("Book uploaded successfully!!!")
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* {first row} */}
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Book Name" required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" type="text" name='authorName' placeholder="Author Name" required />
      </div>
        </div>

        {/* {second row} */}
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" type="text" name='imageURL' placeholder="Book Image URL" required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>
        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
          }
        </Select>
      </div>
        </div>

        {/* {therd row} */}
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Book Description..." required rows={4} />
      </div>

      {/* {book pdf link} */}
      <div>
      <div className="mb-2 block">
          <Label htmlFor="pdfURL" value="Book PDF Link" />
        </div>
        <TextInput id="pdfURL" type="text" name='pdfURL' placeholder="Book PDF Link" required shadow />
      </div>

        <Button type="submit" className='mt-5'>Upload Book</Button>
      
    </form>
    </div>
  )
}

export default UploadBook