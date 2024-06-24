import express from "express";
import Goal from "../model/goalModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const goals = await Goal.find();
  res.json(goals);
});
router.post("/", async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field.");
  }

  const goal = await Goal.create({
    text: req.body.text,
  });

  res.json(goal);
});
router.put("/:id", async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(updatedGoal);
});
router.delete("/:id", async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new error("Goal not found");
  }

  await Goal.findByIdAndDelete(req.params.id);

  res.json({ message: `deleted Goal ${req.params.id}` });
});

export default router;
