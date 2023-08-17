const express = require('express');
import { Request, Response } from 'express';
import pool from '../database';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const query = 'SELECT * FROM "public"."teams"';
  try {
    const result = await pool.query(query);
    if (result) {
      return res.status(200).send(JSON.stringify(result?.rows));
    }
  } catch (e) {
    throw e;
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  if (typeof Number(req.params.id) !== 'number') {
    throw 'ERROR: The id you have sent is not a number, please modify it with the appropriate format and number';
  }

  const query = `SELECT * FROM "public"."teams" WHERE id = ${req.params.id}`;
  try {
    const result = await pool.query(query);
    if (result) {
      return res.status(200).send(JSON.stringify(result?.rows));
    }
  } catch (e) {
    throw e;
  }
});

module.exports = router;
