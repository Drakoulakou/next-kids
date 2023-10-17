// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const customers = [
  { name: "Stavros", surname: "Kainich" },
  { name: "Elef", surname: "Kainich" },
];

export default function handler(req, res) {
  res.status(200).json(customers);
}
