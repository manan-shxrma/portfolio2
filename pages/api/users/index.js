import connectMongo from '../../database/conn';

export default async function handler(req, res) {
  connectMongo();
  res.status(200).json({ name: 'John Doe' })
}