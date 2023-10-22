// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const kids = [];

export default function handler(req, res) {
  try {
    if (req.method === "GET") {
      res.status(200).json(kids); // response the kids
    }
    if (req.method === "POST") {
      const kid = JSON.parse(req.body); // JSON.parse transform string to object
      kids.push(kid);
      res.status(200).json(kids); // REQUIRED response
    }
  } catch (err) {
    res.status(500).json({ message: err }); // catch errors
  }
}
