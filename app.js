const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const router = require("./routes/main.js");

const app = express();
const PORT = process.env.EXPRESS_PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(router);

app.listen(PORT, () => {
	console.log(`server started. Listening on port ${PORT}`);
});

/*TODO WED:

- make stormglass request only cover certain days
- build postgres connection
- come up with DB design
- make mock DB entry
*/
