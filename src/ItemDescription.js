import React from "react";

const ItemDescription = ({ name, description }) => {
  return (
    <>
      <p>{name}</p>
      <p>
        <i>{description}</i>
      </p>
    </>
  );
};

export default ItemDescription;
