import "./HeroImgStyles.css";
import IntroImg from "../assets/bg_01.jpg";
import { BsArrowRepeat } from "react-icons/bs";
import "../index.css";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
//Actual logic
const ACCESS_TOKEN = "f3bafbec8fa2149fdc2982844145cf8d1f4dd269";

function App() {
  //declaration
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [expirationDate, setExpirationDate] = useState(null);
  const [urlList, setUrlList] = useState([]);

  //for local storage
  useEffect(() => {
    const savedUrls = JSON.parse(localStorage.getItem("urlList") || "[]");
    setUrlList(savedUrls);
  }, []);

  useEffect(() => {
    localStorage.setItem("urlList", JSON.stringify(urlList));
  }, [urlList]);

  //handle submit Api Call
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api-ssl.bitly.com/v4/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        long_url: url,
        expires_at: expirationDate && expirationDate.toISOString(),
      }),
    });
    const data = await response.json();
    setShortUrl(data.link);
    setUrlList([...urlList, { longUrl: url, shortUrl: data.link }]);

    const handleDate = (e) => {
      setExpirationDate(e.target.value);
    };
  };

  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="intro-img" />
      </div>

      <div className="content">
        {/* <p>Hi! I am a Software Developer</p> */}
        <h1>URL-Shortener</h1>
        <div className="border">
          <form onSubmit={handleSubmit} className="link">
            <input
              type="date"
              selected={expirationDate}
              onChange={(e) => setExpirationDate(e)}
              minDate={new Date()}
              className="set-date"
              placeholder="Expiry date"
            />
            <input
              type="text"
              value={url}
              className="link-input"
              placeholder="Paste link or url"
              size="50"
              onChange={(event) => setUrl(event.target.value)}
            />

            <button type="button" onClick={handleSubmit} className="submit">
              <BsArrowRepeat
                size={20}
                style={{ color: "black", alignItems: "center" }}
              />
            </button>
          </form>
          {shortUrl && (
            <div>
              <p>Shortened URL:</p>
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
              {expirationDate && (
                <p>Expires on: {expirationDate.toLocaleDateString()}</p>
              )}
            </div>
          )}
          {urlList.length > 0 && (
            <div>
              <h2>Recent URLs</h2>
              <ul>
                {urlList.map((urlItem, index) => (
                  <li key={index}>
                    <a
                      href={urlItem.shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {urlItem.shortUrl}
                    </a>
                    <br />
                    <small>{urlItem.longUrl}</small>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
