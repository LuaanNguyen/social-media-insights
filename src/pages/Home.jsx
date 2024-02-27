import data from "../data.json";

//filterCountru returns the users from different countries
function filterCountry() {
  let countries = {};
  for (const user of data) {
    if (user.user_profile.country in countries) {
      countries[user.user_profile.country].push(user.user_profile);
    } else {
      countries[user.user_profile.country] = [user.user_profile];
    }
  }
  console.log(countries);
  return countries;
}

//filterTiktokFollowers returns the users from ranges of likes
function filterTiktokFollowers(lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    if (
      user.user_profile.tiktok_followers >= lowerRange &&
      user.user_profile.tiktok_followers <= upperRange
    ) {
      users.push(user.user_profile);
    }
  }
  console.log(users);
  return users;
}

//filterTikTokEmail returns the users who have tiktok email (useless)
function filterTikTokEmail() {
  let users = [];

  for (const user of data) {
    if (user.user_profile.tiktok_email === true) {
      users.push(user.user_profile);
    }
  }
  console.log(users);
  return users;
}

//filterByPostCount returns the users who have
function filterByPostCount(lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    if (
      user.posts_info.length >= lowerRange &&
      user.posts_info.length <= upperRange
    ) {
      users.push(user.user_profile);
    }
  }
  console.log(users);
  return users;
}

function filterByTotalLikes(lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    let totalLike = 0;
    for (const post of user.posts_info) {
      totalLike += post.likes;
    }
    if (totalLike >= lowerRange && totalLike <= upperRange) {
      users.push(user.user_profile);
    }
  }

  console.log(users);
  return users;
}

function filterByTotalViews(lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    let totalViews = 0;
    for (const post of user.posts_info) {
      totalViews += post.views;
    }
    if (totalViews >= lowerRange && totalViews <= upperRange) {
      users.push(user.user_profile);
    }
  }

  console.log(users);
  return users;
}

function filterByTotalShares(lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    let totalShares = 0;
    for (const post of user.posts_info) {
      totalShares += post.shares;
    }
    if (totalShares >= lowerRange && totalShares <= upperRange) {
      users.push(user.user_profile);
    }
  }

  console.log(users);
  return users;
}

function filterByTotalShares_WhatsApp(lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    let totalShares = 0;
    for (const post of user.posts_info) {
      totalShares += post.shares_whatsapp;
    }
    if (totalShares >= lowerRange && totalShares <= upperRange) {
      users.push(user.user_profile);
    }
  }

  console.log(users);
  return users;
}

function filterByTotalComments(lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    let totalComments = 0;
    for (const post of user.posts_info) {
      totalComments += post.comments;
    }
    if (totalComments >= lowerRange && totalComments <= upperRange) {
      users.push(user.user_profile);
    }
  }

  console.log(users);
  return users;
}

function filterByTotalSaved(lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    let totalSaved = 0;
    for (const post of user.posts_info) {
      totalSaved += post.saved;
    }

    if (totalSaved >= lowerRange && totalSaved <= upperRange) {
      users.push(user.user_profile);
    }
  }

  console.log(users);
  return users;
}

//this function returns the array of user with the specific range of average view
function filterByAverageView(minimumView, maximumView) {
  let users = [];

  for (const user of data) {
    let count = 0;
    let view = 0;
    for (const post of user.posts_info) {
      view += post.views;
      count++;
    }

    //function to calculate the average view
    let averageView = view / count;

    if (averageView >= minimumView && averageView <= maximumView) {
      users.push(user.user_profile);
    }
  }

  console.log(users);
  return users;
}

function Home() {
  filterByAverageView(1000, 90000);

  return <></>;
}

export default Home;
