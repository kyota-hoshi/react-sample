import React from "react";
import Card from "./Card";

function Body() {
  return (
    <div className='body'>
      <Card content='Study English' />
      <Card content='Study React' />
      <Card content='Clean Room' />
    </div>
  )
}

export default Body