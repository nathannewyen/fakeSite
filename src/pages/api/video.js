import axios from "axios";

const endpoint = process.env.VIMEO_API_URL;

export default async (req, res) => {
  const response = await axios.get(endpoint);
  const data = response.data;

  const videos = data.map(
    ({ id, title, description, thumbnail_large: thumbnail, url }) => ({
      id,
      title,
      description,
      thumbnail,
      url,
    })
  );

  res.status(200).json({ videos });
};
