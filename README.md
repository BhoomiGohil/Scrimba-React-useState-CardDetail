# Contact Card Application

This React application displays a contact card that showcases user information. Users can mark a contact as a favorite by clicking on a star icon, which toggles between a filled and an empty star to represent the favorite status.

## Project Structure

```
- src/js/
  - MainContent.js
- src/styles/
  - Index.css
- src/index.js
- src/index.html
- public/images/
  - practice14-user.png
- public/icons/
  - star-filled-icon.png
  - star-empty-icon.png
```

## Getting Started

### Prerequisites

- Node.js
- React

### Installation

1. Clone the repository:

```bash
git clone https://github.com/BhoomiGohil/Scrimba-React-useState-CardDetail.git
cd Scrimba-React-useState-CardDetail
```

2. Install dependencies:

```bash
npm install
```

### Running the App

To start the application, run the following command:

```bash
npm start
```

This will launch the app in your default browser at `http://localhost:3000`.

## Key Concepts

- **State Management**: The app uses the `useState` hook to manage contact information and the favorite status.
- **Dynamic Rendering**: It demonstrates how to dynamically render user information based on state.
- **Event Handling**: The application handles click events to toggle the favorite status.
