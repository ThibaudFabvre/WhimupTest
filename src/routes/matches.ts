import { Request, Response } from 'express';
import pool from '../database';
// import { fakeMatches, fakeTeams } from '../seeders/db-seeder';
const express = require('express');

const router = express.Router();

// router.get('/', async (req: Request, res: Response) => {
//   return res.status(200).send({
//     matches: fakeMatches.map((match) => ({
//       ...match,
//       teams: fakeTeams.reduce((currentValue: any, currentTeam) => {
//         if (currentTeam.matches.includes(match.id)) {
//           currentValue.push(currentTeam);
//         }
//         return currentValue;
//       }, []),
//     })),
//   });
// });

router.get('/', async (req: Request, res: Response) => {
  const query = 'SELECT * FROM "public"."matches"';
  try {
    const result = await pool.query(query);
    if (result) {
      let formattedResponse = [];
      for (const match of result.rows) {
        let teams = [];
        for (const result of match.results) {
          const teamQuery = `SELECT * FROM "public"."teams" WHERE "id" =  ${result.id}`;
          const queryResult = await pool.query(teamQuery);
          teams.push(queryResult.rows[0]);
        }
        formattedResponse.push({
          ...match,
          teams,
        });
      }

      return res.status(200).send(formattedResponse);
    }
  } catch (e) {
    throw e;
  }
});

module.exports = router;
