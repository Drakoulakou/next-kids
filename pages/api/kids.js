import { sql } from "@vercel/postgres";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const { rows } = await sql`SELECT * from kids`;
      res.status(200).json(rows);
    }
    if (req.method === "POST") {
      const kid = JSON.parse(req.body);
      await sql`INSERT INTO kids (firstname, lastname, date_of_birth, gender, teacher) VALUES (${kid.name},${kid.surname},${kid.dateOfBirth},${kid.gender},${kid.teacher});`;
      const { rows } = await sql`SELECT * from kids`;
      res.status(200).json(rows);
    }
  } catch (err) {
    res.status(500).json({ message: err }); // catch errors
  }
}
