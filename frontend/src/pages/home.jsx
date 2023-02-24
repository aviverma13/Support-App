import React from "react";
import { Link } from "react-router-dom";
import { UilQuestionCircle, UilTicket } from "@iconscout/react-unicons";

function Home() {
  return (
    <>
      <section className="heading">
        <h1>What do you need help with?</h1>
        <p>Please choose from an option below </p>
      </section>

      <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <UilQuestionCircle /> Create New Ticket
      </Link>

      <Link to="/ticket" className="btn  btn-block">
        <UilTicket /> View My Ticket
      </Link>
    </>
  );
}

export default Home;
