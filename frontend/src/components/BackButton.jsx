import { Link } from "react-router-dom";
import { UilArrowCircleLeft } from "@iconscout/react-unicons";
import React from "react";

const BackButton = ({ url }) => {
  return (
    <>
      <Link to={url} className="btn btn-reverse btn-back">
        <UilArrowCircleLeft />
        Back
      </Link>
    </>
  );
};

export default BackButton;
