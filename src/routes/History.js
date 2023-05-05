import "./history.css";
import React from "react";
import HeroImg2 from "../components/HeroImg2";
import { MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import "./history.css";

function History() {
  const [urlList, setUrlList] = useState([]);

  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem("urlList"));
    if (storedUrls) {
      setUrlList(storedUrls);
    }
  }, []);
  const handleDeleteUrl = (id) => {
    const newUrlList = urlList.filter((urlItem) => urlItem.id !== id);
    setUrlList(newUrlList);
    localStorage.setItem("urlList", JSON.stringify(newUrlList));
  };

  const handleCopyShortUrl = (shortUrl) => {
    navigator.clipboard.writeText(shortUrl);
  };

  const handleEditExpirationDate = (urlItem) => {
    const newExpirationDate = prompt("Enter new expiration date (YYYY-MM-DD):");
    const parsedNewExpirationDate =
      newExpirationDate && new Date(newExpirationDate);
    const newUrlList = urlList.map((item) => {
      if (item.id === urlItem.id) {
        return {
          ...item,
          expirationDate: parsedNewExpirationDate,
        };
      } else {
        return item;
      }
    });
    setUrlList(newUrlList);
    localStorage.setItem("urlList", JSON.stringify(newUrlList));
  };

  return (
    <div>
      <h1>History</h1>
      {urlList.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Long URL</th>
              <th>Short URL</th>
              <th>Expiration Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {urlList.map((urlItem) => (
              <tr key={urlItem.id}>
                <td>{urlItem.longUrl}</td>
                <td>
                  <a
                    href={urlItem.shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {urlItem.shortUrl}
                  </a>
                </td>
                <td>
                  {urlItem.expirationDate?.toLocaleDateString() ?? "Never"}
                </td>
                <td>
                  <button onClick={() => handleCopyShortUrl(urlItem.shortUrl)}>
                    Copy
                  </button>
                  <button onClick={() => handleEditExpirationDate(urlItem)}>
                    Edit Expiration
                  </button>
                  <button onClick={() => handleDeleteUrl(urlItem.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No previously shortened URLs found.</p>
      )}
    </div>
  );
}

export default History;

// const History = () => {
//   const heading = "HISTORY";
//   const [arrayLinks, setArrayLinks] = useState([]);

//   useEffect(() => {
//     const arrayLinks = localStorage.getItem("arrayLinks");
//     setArrayLinks(JSON.parse(arrayLinks));
//   }, []);

//   const handleDelete = (arrayIndex) => {};

//   return (
//     <>
//       <div>
//         <HeroImg2 heading={heading} />
//         {arrayLinks && arrayLinks.length
//           ? arrayLinks.map((arrayLinks, arrayIndex) => {
//               return (
//                 <div>
//                   Link - {arrayLinks.link}
//                   <br />
//                   NewLink - {arrayLinks.newLink}
//                   <br />
//                   ExpiryDate - {arrayLinks.expiryDate}
//                   <MdDelete onClick={() => handleDelete(arrayIndex)}></MdDelete>
//                 </div>
//               );
//             })
//           : "array is empty"}

//         {/* <HeroImg/> */}
//       </div>
//     </>
//   );
// };

// export default History;
