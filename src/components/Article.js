import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBoxes = Math.ceil(minutes / 10);

  const renderCoffeeCups = () => {
    return "☕️".repeat(coffeeCups);
  };

  const renderBentoBoxes = () => {
    return "🍱".repeat(bentoBoxes);
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <span>
        {minutes < 30 ? renderCoffeeCups() : renderBentoBoxes()} {minutes} min read
      </span>
    </article>
  );
}

export default Article;
