const axios = require("axios");

const resolvers = {
  Query: {
    videos: async () => {
      try {
        const response = await axios.get(
          "https://vimeo.com/api/v2/channel/staffpicks/videos.json"
        );
        return response.data;
      } catch (err) {
        console.error(err);
        return [];
      }
    },
  },
};

module.exports = { resolvers };
