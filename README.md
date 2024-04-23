# Search Places React App

Welcome to the Search Places React App! This project allows users to search through places and view the results in a table format. The application is built using React.js and incorporates various functionalities such as searching, pagination, and setting limits for API data.

## Getting Started

Follow these steps to get the project up and running on your local machine:

### Prerequisites

Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/AmitDalal007/search-places.git
    ```

2. Navigate to the project directory:

    ```bash
    cd search-places
    ```

3. Install dependencies for both the frontend and backend:

    ```bash
    npm install
    ```

4. Start the frontend development server:

    ```bash
    npm start
    ```

    This will launch the React development server. You can view the app by opening [http://localhost:3000](http://localhost:3000) in your web browser.

### Usage

Once the application is running locally, you can use the following features:

- **Search Box:** Enter your search query in the search box and press Enter to see the results in the table below. You can also use the keyboard shortcut Ctrl + / to focus on the search box.

- **Table:** View the search results displayed in a table format. The table includes columns for the serial number, place name, and country. If no results are found, the table will display "No result found".

- **Pagination:** Navigate through the search results using the pagination controls. The pagination buttons allow you to move between pages of search results.

- **Limit Input:** Set the limit for the number of items fetched from the server using the input box on the far right side. The default limit is 5, and the maximum limit is 10.

## Additional Notes

- Make sure to set up your environment variables for API access. Refer to the `.env.example` file for guidance on configuring your environment variables.

- This project uses the [wft-geo-db](https://rapidapi.com/wirefreethought/api/geodb-cities) API to fetch city data.

## Contributing

Contributions are welcome! If you have any suggestions or find any issues, feel free to open an issue or submit a pull request.
