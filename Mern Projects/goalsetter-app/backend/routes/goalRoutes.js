import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get Goals" });
});
router.post("/", (req, res) => {
  res.json({ message: "Set Goal" });
});
router.put("/:id", (req, res) => {
  res.json({ message: `update Goal ${req.params.id}` });
});
router.delete("/:id", (req, res) => {
  res.json({ message: `update Goal ${req.params.id}` });
});

export default router;
