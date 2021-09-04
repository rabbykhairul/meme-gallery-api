const fs = require("fs");

const getBase64StringFromBufferData = (bufferData) => {
  console.log("\n---");
  console.log("bufferData: ", bufferData);
  console.log("---\n");
  try {
    return bufferData.toString("base64");
  } catch (err) {
    return null;
  }
};

module.exports = { getBase64StringFromBufferData };