export default async function handler(req, res) {
  let result = { data: "SUCCESS" };

  return res.status(200).json(result);
}
