import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const renderMinutesToRead = () => {
    if (!minutes) return null;

    let emoji = "";
    let repetitions = 0;

    if (minutes < 30) {
      // Coffee cup emoji for articles less than 30 minutes
      repetitions = Math.ceil(minutes / 5);
      emoji = "☕️";
    } else {
      // Bento box emoji for articles 30 minutes or longer
      repetitions = Math.ceil(minutes / 10);
      emoji = "🍱";
    }

    return (
      <small>
        {emoji.repeat(repetitions)} {minutes} min read
      </small>
    );
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {renderMinutesToRead()}
      <p>{preview}</p>
    </article>
  );
}

export default Article;
