# Project was developed by Oleksii Khudenko[https://github.com/loisteg]

This project is a React application that utilizes Create React App as its foundation. It is designed to display different information from NASA APIs and includes various features for user interaction.

## Available Screens

### 1. Neos Screen

- **Description**: Displays a list of Near-Earth Objects (NEOs) with relevant details.
- **Information Shown**:
  - List of NEOs with their names and hazard status.
  - Each NEO can be clicked to view more detailed information.

### 2. Neo Screen

- **Description**: Provides detailed information about a specific NEO.
- **Information Shown**:
  - Full name of the NEO.
  - Potential hazard status (Yes/No).
  - Estimated diameter range.
  - Whether it is a sentry object.
  - Absolute magnitude and designation.

### 3. Counter Screen

- **Description**: Displays a counter for items based on user requests.
- **Information Shown**:
  - Total number of items found based on the user's query.
  - Visual representation of the count with color coding (primary for positive counts, error for zero).
  - List of items which are requested by the user.
  - Pagination to navigate through the list of items.

### 4. Apod Screen

- **Description**: Displays the Astronomy Picture of the Day (APOD).
- **Information Shown**:
  - Astronomy pictures.

### 5. Error Screen

- **Description**: Displays an error message when a route is not found.
- **Information Shown**:
  - A user-friendly error message indicating that the requested page does not exist.

## Setup and Launch

To set up and launch the project, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**:
   Make sure you have Node.js and Yarn installed. Then run:

   ```bash
   yarn install
   ```

3. **Run the Application**:
   Start the development server with:
   ```bash
   yarn start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
