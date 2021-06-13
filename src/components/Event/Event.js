import React, { useEffect, useState } from 'react';

const Event = ({event}) => {
    const {imageURL, name} = event.newEvent;
   
    const deleteEvent = id => {
       console.log(id);
      fetch(
        `https://sheltered-reaches-49918.herokuapp.com/events/deleteEvent/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    return (
      <div className="container col-md-3">
        <img
          style={{ height: "300px", marginLeft: "5px" }}
          src={imageURL}
          alt=""
        />
        <h3>
          {name}
          <button onClick={() => deleteEvent(event._id)}>Delete</button>
        </h3>
      </div>
    );
};

export default Event;