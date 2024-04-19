# CSV to JSON Converter

A simple JavaScript library to convert CSV files to JSON format.

## Overview

This project provides a lightweight solution for converting CSV files to JSON format without relying on npm or package managers. You can manually download the library from the GitHub repository and integrate it into your projects.

## Features

- Converts CSV files to JSON format.
- Simple and easy to use.
- No npm or package manager required.

## Installation

To use the CSV to JSON converter library, follow these steps:

1. **Download**:

   - Download the project repository from GitHub as a zip file.
   - Alternatively, you can clone the repository using Git.

2. **Integration**:

   - Extract the downloaded zip file (if applicable).
   - Copy the `lib/index.js` file from the repository to your project directory.

3. **Usage**:
   - In your project, import the `index.js` file using a script tag in your HTML file or by directly including it in your JavaScript code.

```html
<script src="path/to/index.js"></script>
```

```javascript
// Your JavaScript code
```

4. **Conversion**:
   - Call the `csvToJson(filePath)` function, passing the path to your CSV file as an argument.
   - This function returns a Promise that resolves with an array of JSON objects representing the data from the CSV file.

```javascript
csvToJson("path/to/your/csv/file.csv")
  .then((jsonArray) => {
    console.log(jsonArray);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## Example

Suppose you have a CSV file named `data.csv` with the following content:

```
Name,Age,Email
John,30,john@example.com
Jane,25,jane@example.com
```

You can convert this CSV file to JSON in your project using the provided library:

```javascript
csvToJson("path/to/data.csv")
  .then((jsonArray) => {
    console.log(jsonArray);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

This will output:

```json
[
  { "Name": "John", "Age": "30", "Email": "john@example.com" },
  { "Name": "Jane", "Age": "25", "Email": "jane@example.com" }
]
```

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the library.
