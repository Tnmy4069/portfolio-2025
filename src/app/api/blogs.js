// /api/blogs.js
import blogsData from '../data/blogs.json';

export default function handler(req, res) {
  res.status(200).json(blogsData);
}
