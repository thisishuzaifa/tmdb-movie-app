import React from "react";
import tmdb from "../images/tmdb.svg";

function PageAbout() {
  return (
    <>
      <section className="about-page">
        <h2> Simple react app for movies using TMDb API</h2>
        <p>
          This product uses the TMDb API but is not endorsed or certified by
          TMDb.
        </p>
        <img src={tmdb} alt="TMDb logo" />
      </section>
    </>
  );
}

export default PageAbout;
