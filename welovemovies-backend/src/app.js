if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const notFound = require("./routes/errors/notFound");
const errorHandler = require("./routes/errors/errorHandler");

const moviesRouter = require("./routes/movies/movies.router");
const reviewsRouter = require("./routes/reviews/reviews.router");
const theatersRouter = require("./routes/theaters/theaters.router");

app.use(cors());
app.use(express.json());

app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;