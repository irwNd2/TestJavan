const errorHandler = (err, req, res, next) => {
  if (err.name === "SequelizeValidationError") {
    const errors = err.errors.map((el) => el.message);
    res.status(400).json({ message: errors });
  } else if (err.name === "SequelizeUniqueConstraintError") {
    const errors = err.errors.map((el) => el.message);
    res.status(400).json({ message: errors });
  } else {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = errorHandler;
