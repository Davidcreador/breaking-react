import axios from "axios";

const API_URL = "https://www.breakingbadapi.com/api"

export default {
  async fetchEpisodes() {
    const result = await axios.get(`${API_URL}/episodes`);

    if (!result) {
      console.log("Error while fetching data");
      return;
    }

    return result.data
  },

  async fetchCharacters() {
    const result = await axios.get(`${API_URL}/characters`);

    if (!result) {
      console.log("Error while fetching data");
      return;
    }

    return result.data
  },

  async fetchDeaths() {
    const result = await axios.get(`${API_URL}/deaths`);

    if (!result) {
      console.log("Error while fetching data");
      return;
    }

    return result.data
  }
}
