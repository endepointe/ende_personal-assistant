export default async (req, res) => {
  if (req.method === 'POST') {
    console.log(req.body);
    res.send(200);
  }
}