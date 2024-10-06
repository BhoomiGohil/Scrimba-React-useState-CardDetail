import React from "react"; // Importing React to use JSX and hooks

export default function MainContent() {
  // State to manage the contact information
  const [contact, setContact] = React.useState({
    firstName: "John", // Initial first name
    lastName: "Doe", // Initial last name
    phone: "+1 (719) 555-1212", // Initial phone number
    email: "itsmyrealname@example.com", // Initial email address
    isFavorite: false, // Initial favorite status
  });

  // Determine which star icon to display based on favorite status
  let starIcon = contact.isFavorite
    ? `star-filled-icon.png` // Icon when contact is marked as favorite
    : `star-empty-icon.png`; // Icon when contact is not favorite

  // Function to toggle the favorite status of the contact
  function toggleFavorite() {
    setContact((prevState) => {
      return {
        ...prevState, // Spread the previous state
        isFavorite: !prevState.isFavorite, // Toggle the favorite status
      };
    });
  }

  return (
    <main>
      <article className="card">
        <img
          src="Images/practice14-user.png"
          className="card--image"
          alt="User"
        />
        {/* User image */}
        <div className="card--info">
          <img
            src={`icons/${starIcon}`} // Displaying the star icon based on favorite status
            className="card--favorite"
            onClick={toggleFavorite} // Event handler for toggling favorite status
            alt="Favorite Icon"
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName} {/* Displaying full name */}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          {/* Displaying phone number */}
          <p className="card--contact">{contact.email}</p>
          {/* Displaying email address */}
        </div>
      </article>
    </main>
  );
}
