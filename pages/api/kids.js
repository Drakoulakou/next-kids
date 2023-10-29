import { sql } from "@vercel/postgres";

const kids = [];

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { rows } = await sql`SELECT * from Kids`;
      res.status(200).json(rows); // response the kids
    }
    if (req.method === "POST") {
      const kid = JSON.parse(req.body); // JSON.parse transform string to object

      res.status(200).json(kids); // REQUIRED response
    }
  } catch (err) {
    res.status(500).json({ message: err }); // catch errors
  }
}
