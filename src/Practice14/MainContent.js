import React from "react";

export default function MainContent() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  let starIcon = contact.isFavorite
    ? `star-filled-icon.png`
    : `star-empty-icon.png`;

  function toggleFavorite() {
    setContact((prevState) => {
      return {
        ...prevState,
        isFavorite: !prevState.isFavorite,
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img src="Images/practice14-user.png" className="card--image" />
        <div className="card--info">
          <img
            src={`icons/${starIcon}`}
            className="card--favorite"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
