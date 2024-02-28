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
function filterTiktokFollowers(data, lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    if (
      user.user_profile.tiktok_followers >= lowerRange &&
      user.user_profile.tiktok_followers <= upperRange
    ) {
      users.push(user);
    }
  }
  console.log(users);
  return users;
}

//filterTikTokEmail returns the users who have tiktok email (useless)
function filterTikTokEmail(data) {
  let users = [];

  for (const user of data) {
    if (user.user_profile.tiktok_email === true) {
      users.push(user);
    }
  }
  console.log(users);
  return users;
}

//filterByPostCount returns the users who have
function filterByPostCount(data, lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    if (
      user.posts_info.length >= lowerRange &&
      user.posts_info.length <= upperRange
    ) {
      users.push(user);
    }
  }
  console.log(users);
  return users;
}

function filterByTotalLikes(data, lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    let totalLike = 0;
    for (const post of user.posts_info) {
      totalLike += post.likes;
    }
    if (totalLike >= lowerRange && totalLike <= upperRange) {
      users.push(user);
    }
  }

  console.log(users);
  return users;
}

function filterByTotalViews(data, lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    let totalViews = 0;
    for (const post of user.posts_info) {
      totalViews += post.views;
    }
    if (totalViews >= lowerRange && totalViews <= upperRange) {
      users.push(user);
    }
  }

  console.log(users);
  return users;
}

function filterByTotalShares(data, lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    let totalShares = 0;
    for (const post of user.posts_info) {
      totalShares += post.shares;
    }
    if (totalShares >= lowerRange && totalShares <= upperRange) {
      users.push(user);
    }
  }

  console.log(users);
  return users;
}

function filterByTotalShares_WhatsApp(data, lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    let totalShares = 0;
    for (const post of user.posts_info) {
      totalShares += post.shares_whatsapp;
    }
    if (totalShares >= lowerRange && totalShares <= upperRange) {
      users.push(user);
    }
  }

  console.log(users);
  return users;
}

function filterByTotalComments(data, lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    let totalComments = 0;
    for (const post of user.posts_info) {
      totalComments += post.comments;
    }
    if (totalComments >= lowerRange && totalComments <= upperRange) {
      users.push(user);
    }
  }

  console.log(users);
  return users;
}

function filterByTotalSaved(data, lowerRange, upperRange) {
  let users = [];

  for (const user of data) {
    let totalSaved = 0;
    for (const post of user.posts_info) {
      totalSaved += post.saved;
    }

    if (totalSaved >= lowerRange && totalSaved <= upperRange) {
      users.push(user);
    }
  }

  console.log(users);
  return users;
}

//this function returns the array of user with the specific range of average view
function filterByAverageView(data, minimumView, maximumView) {
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
      users.push(user);
    }
  }

  console.log(users);
  return users;
}

function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}

function Home() {
  return (
    <>
      <div className=" w-screen min-h-screen flex-row dark:bg-black bg-gradient-to-tl from-[#9F0D7F] to-[#241468]">
        <div className="flex-row absolute left-6 top-5 dark:text-white">
          <h1 className="text-5xl font-extrabold mb-10 block dark:text-white">
            Insights
            <br />
            Engine.
          </h1>
          <div
            onClick={() => {}}
            className="bg-[#241468] hover:animate-pulse text-center rounded-3xl m-5 shadow-2xl py-7 text-3xl font-extrabold"
          >
            Home
          </div>
          <div
            onClick={() => {}}
            className="bg-[#241468] hover:animate-pulse text-center rounded-3xl m-5 shadow-2xl py-7 text-3xl font-extrabold"
          >
            Users
          </div>
        </div>

        {/* github icon
        <div className="absolute right-3 top-3">
          <i className="devicon-github-original text-5xl dark:text-white"></i>
        </div> */}

        {/* Toggle Button */}
        {/* <button
          onClick={() => {
            toggleTheme();
          }}
          className="fixed right-3 bottom-3 rounded-full p-5 hover:bg-stone-700"
        >
          Toggle
        </button> */}

        {/* footer */}
        <footer className="absolute right-0 bottom-0 p-2 dark:text-white font-bold ">
          <p>© Luan Nguyen</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
