const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');

const getData = () => {
  axios.get('https://ergast.com/api/f1/2020/1/driverStandings.json').then(response => {
    console.log(response);
  });
};

const sendData = () => {
  axios
    .post(
      'https://ergast.com/api/f1/2020/1/driverStandings.json',
      {
        givenName: "Lewis",
        familyName: "Hamilton",
      
      },
      {
      
      }
    )
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err, err.response);
    });
};

getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);