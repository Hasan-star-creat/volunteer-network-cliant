import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      name: data.name,
      imageURL: imageURL
    };
    const url = `http://localhost:5050/addEvent`;
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res => console.log('server side response', res))
  };

    // imge send imgbb then create a link,  link set imgeurl state 
  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set("key", "2c319e3544fcef611297cee1c47a86aa");
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload',
       imageData)
      .then(res => {
        setIMageURL(res.data.data.display_url);
        console.log(res.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  return (
    <div>
      <h1>Add your awesome Event here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
    
      <input name="name" placeholder="new exiting event" ref={register} />
      <br/>
      <input name="exampleRequired" type="file" onChange={handleImageUpload} />
      <br/>
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddEvents;