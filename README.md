# Legacy FamilyTree

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Configuration](#configuration)
- [License](#license)
- [Contact Information](#contact-information)


### Prerequisites
- Node.js installed on your machine

### Installing
1. Clone the repository:
    ```sh
    git clone https://github.com/Astrokojo/legacy-familytree-app.git
    cd familytree
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```

## Usage & Configuration
Instructions on how to use and configure the project.
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Running the JSON Server
## `json-server --watch db.json`
Starts the JSON server with the provided `db.json` file:
The server will run at `http://localhost:3000` by default.\
    
## `json-server --watch db.json -port portnumber`
 Specify your desired port number if you want to run the server on a different port.

### Using the API
- You can now make HTTP requests to the API endpoints. For example:
    ```sh
    GET http://localhost:3000/endpoint
    POST http://localhost:3000/endpoint
    ```

## Features
- Utilizes `json-server` to quickly create a mock REST API.
- Utilizes `GOJS` to render the diagram

