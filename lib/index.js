const fs = require("fs");
const csv = require("csv-parser");

/**
 * Convert a CSV file to JSON.
 * @param {string} filePath - Path to the CSV file.
 * @returns {Promise<Array<Object>>} - A Promise that resolves with an array of JSON objects.
 */
function csvToJson(filePath) {
  return new Promise((resolve, reject) => {
    const jsonArray = [];

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => {
        jsonArray.push(data);
      })
      .on("end", () => {
        resolve(jsonArray);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

module.exports = csvToJson;
