import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const URL = "https://api.github.com/users/sawelter";

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

const cards = document.querySelector(".cards");

axios.get(URL)
    .then(res => {
      console.log(res.data);
      const card = userCard(res.data);
      cards.appendChild(card);
      console.log(card);
    })
    .catch(err => {
      console.error(err);
    });

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ "tetondan", "dustinmyers", "justsml", "luishrd", "bigknell" ];

followersArray.forEach((element) => {
  axios.get(`https://api.github.com/users/${element}`)
  .then(res => {
    console.log(res.data);
    const card = userCard(res.data);
    cards.appendChild(card);
    console.log(card);
  })
  .catch(err => {
    console.error(err);
  });
})


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />     // .avatar_url
      <div class="card-info">
        <h3 class="name">{users name}</h3>  // .name
        <p class="username">{users user name}</p> // .login
        <p>Location: {users location}</p>   // .location
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>   //. url
        </p>
        <p>Followers: {users followers count}</p> // .followers
        <p>Following: {users following count}</p> // .following
        <p>Bio: {users bio}</p> // .bio
      </div>
    </div>
*/



function userCard(user) {
  // Create each element first
  const card = document.createElement("div");
  const avatar = document.createElement("img");
  const cardInfo = document.createElement("div");
  const name = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const profileURL = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  // Set classes
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  username.classList.add("username");

  // Set content
  avatar.src = user["avatar_url"];
  name.textContent = user.name;
  username.textContent = user.login;
  location.textContent = `Location: ${user.location}`;
  profile.textContent = "Profile: ";
  profileURL.href = user.url;
  profileURL.textContent = user.url;
  followers.textContent = `Followers: ${user.followers}`;
  following.textContent = `Following: ${user.following}`;
  bio.textContent = `Bio: ${user.bio}`;

  // Append elements to create structure
  card.appendChild(avatar);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileURL);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);


  return card;
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/







// Scrapped Code

/*

const fetchUsers = (event => {
  console.log("about to fetch data!");
  axios.get(URL)
    .then(res => {
      res.data.forEach(user => {
        const card = userCard(user);
        cards.appendChild(card);
      })
    })
    .catch(err => {
      debugger;
    })
})

document.addEventListener("click", fetchUsers());

*/