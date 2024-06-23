//desc@ Get Goals
//routes@ /api/goals
//access@ private
const getGoals = () => {
  return (req, res) => {
    res.json({ message: "Get Goals" });
  };
};
//desc@ Set Goal
//routes@ /api/goals
//access@ private
const setGoal = () => {
  return (req, res) => {
    res.json({ message: "Set Goals" });
  };
};
//desc@ update Goal
//routes@ /api/goals/:id
//access@ private
const updateGoal = () => (req, res) => {
  res.json({ message: `update Goal ${req.params.id}` });
};
//desc@ delete Goals
//routes@ /api/goals/:id
//access@ private
const deleteGoal = () => (req, res) => {
  res.json({ message: `delete Goal ${req.params.id}` });
};

export { getGoals, setGoal, updateGoal, deleteGoal };
