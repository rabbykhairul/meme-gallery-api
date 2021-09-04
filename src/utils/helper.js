const fs = require("fs");
const path = require("path");

const getBase64String = (filePath, mimeType = "image/jpg") => {
  console.log("\n---");
  console.log("filePath: ", filePath);
  console.log("---\n");

  try {
    const base64String = fs.readFileSync(filePath, { encoding: "base64" });
    return `data:${mimeType};base64,${base64String}`;
  } catch (err) {
    return null;
  }
};

module.exports = { getBase64String, saveUploadedFile };