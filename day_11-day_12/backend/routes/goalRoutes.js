const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// router.get("/", (req, res) => {
//   res.status(200).json({ message: "Get goals" });
// });

// router.post("/", (req, res) => {
//   res.status(200).json({ message: "Set goals" });
// });

// router.put("/:id", (req, res) => {
//   res.status(200).json({ message: `Update goals ${req.params.id}` });
// });

// router.delete("/:id", (req, res) => {
//   res.status(200).json({ message: `Delete goals ${req.params.id}` });
// });

// Using controller

// router.get("/", getGoals);
// router.post("/", setGoal);
// router.put("/:id", updateGoal);
// router.delete("/:id", deleteGoal);

const { protect } = require("../middleware/authMiddleware");

// Short syntax
router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;
