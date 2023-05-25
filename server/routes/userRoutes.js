const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getPerson,
  addPerson,
  updatePerson,
  deletePerson,
  getPersonData,
} = require("../controllers/userControllers");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/get", getPerson);
router.post("/post", addPerson);
router.put("/put/:id", updatePerson);
router.delete("/delete/:id", deletePerson);
router.post("/register", register);
router.post("/login",login)
router.get("/auth",authMiddleware,getPersonData)

module.exports = router;
