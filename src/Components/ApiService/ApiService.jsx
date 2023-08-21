import axios from "axios";

export default async function getTrending(type) {
  const data = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=62b0fc4666a7121de866ed1aa6ce36d7`)
  return (data.data.results);
}
