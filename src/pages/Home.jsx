import data from "../data.json";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

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
      <div className="relative w-screen min-h-screen flex-row  bg-gradient-to-tl from-[#9F0D7F] to-[#241468]">
        <div className="flex-row absolute left-6 top-5 text-white">
          <h1 className="text-5xl font-extrabold mb-10 block text-white">
            Insights
            <br />
            Engine.
          </h1>

          <hr className=" w-48 h-1 mx-auto my-4 bg-[#9F0D7F] border-0 rounded md:my-10 "></hr>

          <div
            onClick={() => {}}
            className="bg-[#241468] hover:animate-pulse text-center rounded-3xl m-6 shadow-2xl py-7 text-2xl font-bold"
          >
            Home
          </div>
          <div
            onClick={() => {}}
            className="bg-[#241468] hover:animate-pulse text-center rounded-3xl m-6 shadow-2xl py-7 text-2xl font-bold"
          >
            Users
          </div>
        </div>

        <form className="max-w-md mx-auto ">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative top-5">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none rounded-full">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Countries..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-[#9F0D7F] hover:bg-[#241468] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        {/*icons */}
        <div className="absolute right-5 top-3">
          <i className="devicon-github-original text-4xl text-white"></i>
        </div>
        <div className="absolute right-20 top-3">
          <i className="devicon-linkedin-plain text-4xl text-white"></i>
        </div>

        <div className="flex absolute top-[20%] left-[30%]">
          <div className="relative ">
            <Bar
              data={{
                labels: ["A", "B", "C"],
                datasets: [
                  {
                    label: "Revenue",
                    data: [200, 300, 400],
                    backgroundColor: "#ffffff",
                  },
                  {
                    label: "Loss",
                    data: [90, 80, 70],
                    backgroundColor: [
                      "rgba(43, 63, 229, 0.8)",
                      "rgba(250, 192, 19, 0.8)",
                      "rgba(253, 135, 135, 0.8)",
                    ],
                  },
                ],
              }}
              height="500px"
              width="600px"
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>

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
        <footer className="absolute right-0 bottom-0 p-2 font-bold text-white">
          <p>© Luan Nguyen</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
