require("dotenv").config();
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  let method = req.method;

  let token = req.headers.authorization;
  console.log(token)

  if (!token) {
    return res.status(401).json({ error: "Authorization header missing" });
  }

  token = token.split(" ")[1];
  console.log(token);
  jwt.verify(token, "samreen", (err, decoded) => {
    console.log(decoded);

    if (decoded.userRole === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ error: "Unauthorized access You are not admin" });
    }
  });
};

module.exports = { auth };
