
const ACCESS_TOKEN = "437214169d9be2a73e91d22f76f68b52";

//get the upcoming matches list

export const getMatches = () => {
  const url = `https://rest.entitysport.com/v2/matches/?status=2&token=[ACCESS_TOKEN]`;
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the current matches score

export const getMatchDetail = (id) => {
  const url = `https://rest.entitysport.com/v2/matches/19899/scorecard?unique_id=${id}&token=[ACCESS_TOKEN]`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
