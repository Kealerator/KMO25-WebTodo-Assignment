import { insertTask, selectAllTasks } from "../models/Task.js";

const getTasks = async (req, res, next) => {
  try {
    const result = await selectAllTasks();
    return res.status(200).json(result.rows || []);
  } catch (error) {
    return next(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const description = req.body.task?.description?.trim();
    if (!description) {
      const error = new Error("Task description is required");
      error.status = 400;
      return next(error);
    }
    const result = await insertTask(description);
    return res.status(201).json(result.rows[0]);
  } catch (error) {
    return next(error);
  }
};

const postTask = async (req, res, next) => {
  const { task } = req.body;
  console.log("Task to create:", task);

  try {
    if (!task || !task.description || task.description.trim().length === 0) {
      return next(new ApiError("Task description is required", 400));
    }
    const result = await insertTask(task.description);
  } catch (error) {
    return next(error);
  }
};

const deleteTask = async (req, res, next) => {
  const { task } = req.body;

  try {
    if (!task || !task.id) {
      return next(new ApiError("Tasks ID not found", 400));
    }
    const result = await deleteTask(task.id);
  } catch (error) {
    return next(error);
  }
};

export { getTasks, createTask, postTask, deleteTask };
