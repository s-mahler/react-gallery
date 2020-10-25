# React Gallery

## Description

Duration: Three day weekend sprint

This project takes a table of images from a database and displays then on a webpage. Clicking on an image replaces it with it's description. Users have teh ability to "like" a photo, with a count of likes tracked beneath the image.

The beginning of a form was created, but there is very limited funciontality. Currently, users can enter information as if they were adding their own image to the galler, but nothing happens when "SUBMIT" is clicked. The partial feature was kept in to demonstrate componentizing a form.

### Prerequisites

- [Node](https://nodejs.org/en/)

## Installation

1. Create a databse named "react_gallery".
2. Using the database.sql file provided, initialize a table with the provided images. This project was built with [Postgres](https://www.postgresql.org/download/).
3. Open an editor and run an `npm install` in the terminal
4. To launch the project, run `npm run server` followed by `npm run client`

## Usage

To use the app, either click on a picture or the "like" button. Clicking the picture will show its description, and clicking "like" will increment the like counter.

The form at the bottom of the page can be filled out, and the input change is tracked in the terminal, but there is no functionality beyond that.

## Built With

- Express
- React
- Postgres
- Javascript
- CSS

## Contact

For any questions on this project, contact me at [mahler.sam@gmail.com](mailto:mahler.sam@gmail.com)
