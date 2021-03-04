const express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const { connectToDb } = require("./config/connection");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );
  app.use(morgan("dev"));
}

const port = process.env.PORT || 3001;
connectToDb();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(helmet());

// routes go here
const authRouter = require("./routes/auth.route");
const userRouter = require("./routes/user.route");

app.use(`${process.env.BASE_API_URL}`, authRouter);
app.use(`${process.env.BASE_API_URL}/user`, userRouter);

console.log(process.env.PORT);

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build.index.html"));
  });
}

app.listen(port, function () {
  console.log(`Server started, listening at http://localhost:${port}`);
});
