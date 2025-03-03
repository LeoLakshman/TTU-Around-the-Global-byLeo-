# TTU-Around-the-Global-byLeo-
Interactive 3D globe with city buttons linking to student details pages.

# TTU Student Globe Visualization (Button Navigation)

This project is a web-based 3D globe visualization that displays student data from various cities around the world using the Globe.GL library. Instead of displaying details on click within the main page, city labels are now buttons. Clicking a city button navigates the user to a separate details page that displays specific student information for that city.

## Features

* **Interactive 3D Globe:** Visualizes student locations on a 3D globe using Globe.GL.
* **Data from JSON:** Loads student data from an external JSON file hosted on GitHub Gist.
* **City Buttons:** City labels are interactive buttons that navigate to student details pages.
* **Separate Details Pages:** Displays student majors and other relevant details on dedicated pages for each city.
* **Full-Screen Visualization:** The globe visualization is designed to be full-screen for an immersive experience.

## Technologies Used

* **Globe.GL:** A JavaScript library for creating 3D globe visualizations.
* **JavaScript:** Used for fetching data, handling interactions, and managing navigation.
* **JSON:** Used for storing and transferring student data.
* **HTML/CSS:** Used for structuring and styling the web pages.
* **GitHub Gist:** Used for hosting the JSON data file.
* **localStorage:** Used for temporary data storage for navigation.

## Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository (if applicable):**
    ```bash
    git clone https://github.com/LeoLakshman/TTU-Around-the-Global-byLeo-.git
    cd https://github.com/LeoLakshman/TTU-Around-the-Global-byLeo-.git
    ```
2.  **Create `index.html`, `details.html`, `script.js`, and `details.js` files:**
    * Copy the contents of the provided files into your local files.
3.  **Host the JSON file:**
    * Ensure that the `GIST_URL` variable in `script.js` points to the raw URL of your `studentData.json` file on GitHub Gist. Or download the json file, place it in the same directory as your html and js files, and change the fetch command to fetch("./studentData.json").
4.  **Run a local web server:**
    * **Python:**
        ```bash
        python -m http.server
        ```
        or
        ```bash
        python -m SimpleHTTPServer
        ```
    * **Node.js (using `http-server` or `live-server`):**
        ```bash
        npm install -g http-server
        http-server
        ```
        or
        ```bash
        npm install -g live-server
        live-server
        ```
5.  **Open the visualization:**
    * Open your web browser and navigate to `http://localhost:8000` (or the URL provided by your local server).

## Data Source

The student data is stored in a JSON file (`studentData.json`) hosted on GitHub Gist. You can find the data at:
