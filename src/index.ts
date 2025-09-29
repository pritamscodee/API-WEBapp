let a: number = 455;
console.log(a);
let c: string = "pritam";
console.log(c);

const searchInput = document.querySelector("#searchInput") as HTMLInputElement;

const apidiv = document.querySelector(".apidivs") as HTMLDivElement;

interface UserData {
  id: number;
  login: string;
  avatar_url: string;
  location: string;
  url: string;
}

export async function fetchUserdata(url: string): Promise<UserData[]> {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

// 👆 ADD THIS - Actually call your function
fetchUserdata("https://api.github.com/users")
  .then((data) => {
    data;
    //console.log('Fetched user data:', data);

    data.forEach((data: UserData): void => {
      apidiv.appendChild(
        document.createElement("div")
      ).innerHTML = `   <div class="card">
    <img src="${data.avatar_url}" alt="John" style="width:100%">
    <h1>${data.login}</h1>
    <p class="title">Location: ${data.location}</p>
    <p>Some text that describes me lorem ipsum ipsum lorem.</p>
    <a href="${data.url}"><button>Contact</button></a>
  </div>`;
    });
  })
  .catch((error) => {
    console.log("Error:", error);
  });

export {};
