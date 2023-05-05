import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import HeroImg2 from "../components/HeroImg2";
import { MdDelete } from "react-icons/md";

const History = () => {
  const heading = "HISTORY";
  const [arrayLinks, setArrayLinks] = useState([]);

  useEffect(() => {
    const arrayLinks = localStorage.getItem("arrayLinks");
    setArrayLinks(JSON.parse(arrayLinks));
  }, []);

  const handleDelete = (arrayIndex) => {};

  return (
    <>
      <div>
        <HeroImg2 heading={heading} />
        {arrayLinks && arrayLinks.length
          ? arrayLinks.map((arrayLinks, arrayIndex) => {
              return (
                <div>
                  Link - {arrayLinks.link}
                  <br />
                  NewLink - {arrayLinks.newLink}
                  <br />
                  ExpiryDate - {arrayLinks.expiryDate}
                  <MdDelete onClick={() => handleDelete(arrayIndex)}></MdDelete>
                  <button className="btn btn-danger btn-sm m-2 bg-color:red ">
                    Delete
                  </button>
                </div>
              );
            })
          : "array is empty"}

        {/* <HeroImg/> */}
      </div>
    </>
  );
};

export default History;
