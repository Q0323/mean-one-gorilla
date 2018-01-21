import express from 'express';
import { item } from './../db-api';
import { handleError } from '../utils';

const app = express.Router();

// GET /api/items
app.get('/', async (req, res) => {
  try {
    const { sort } = req.query;
    const items = await item.findAll(sort);
    res.status(200).json(items);
  } catch (error) {
    handleError(error, res);
  }
});

// POST /api/items
app.post('/', async (req, res) => {
  const { name, email, value, values, result } = req.body;
  const i = {
    name,
    email,
    value,
    values,
    result,
  };

  try {
    const savedItem = await item.create(i);
    res.status(201).json(savedItem);
  } catch (error) {
    handleError(error, res);
  }
});

export default app;
