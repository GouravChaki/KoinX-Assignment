module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(200).send({
    success: false,
    error: err.message,
  });
};
