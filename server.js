//server.js
const app = require("./app");
const PORT = 3333;

const launch = (port) => {
  try {
    app.listen(PORT, () => {
      console.log(`[STARTING] Development mode ${process.env.NODE_ENV === "development" ? "ON" : "OFF"}`);
      console.log(`[STARTED] Simple API Server started on port ${PORT}`);
    });
  } catch(err) {
    console.error(err);
    process.exit();
  }
}

module.exports = launch(PORT);