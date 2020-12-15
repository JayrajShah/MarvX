import crypto from "crypto";
const apikey = "3d562c435c14f0d56584faaf3cab7418";
const privatekey = "d8dbeeacd7e73448ef6b331ef4ea2911e04cf98a";

export const getAllCharacters = (offset = 0) => {
  const ts = String(new Date().getTime());
  const data = ts + privatekey + apikey;
  const hash = crypto.createHash("md5").update(data).digest("hex");
  return fetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&offset=${offset}`
  )
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
