import React, { useState } from "react";
import Search from "./Search";
import { config } from "./Constants";

function Card({ stateChanger, metaData, id, prompt }) {
  const [cover, setCover] = useState("https://picsum.photos/600/400/?random");
  return (
    <div class="my-1 px-1 w-full sm:w-1/2 md:w-1/3 lg:my-5 lg:px-5 lg:w-1/5">
      <div className="rounded-lg shadow-lg  min-h-full bg-coolor-2 flex flex-col">
        <img alt="Placeholder" class="block h-auto w-full" src={cover} />
        <header className="h-32  items-center justify-between leading-tight p-2 md:p-4 text-center">
          <h1 className="text-lg text-center">{prompt}</h1>
        </header>
        <div className="align-middle">
          <Search
            stateChanger={stateChanger}
            metaData={metaData}
            returnCover={setCover}
            id={id}
          />
        </div>
      </div>
    </div>
  );
}

function Export({ metaData }) {
  const [isLoading, setIsLoading] = useState(false);
  const URL = config.url;
  const handleButton = async () => {
    setIsLoading(true);
    const response = await fetch(`${URL}/canvas`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(metaData),
    });
    const img = await response.blob();
    let url = window.URL.createObjectURL(img);
    let a = document.createElement("a");
    a.href = url;
    a.download = "bingo_2023.png";
    a.click();
    setIsLoading(false);
  };
  return (
    <div className="flex justify-center">
      <button
        className="bg-coolor-2 text-black font-bold py-2 px-4 rounded"
        onClick={handleButton}
        disabled={isLoading}
      >
        Export to a picture
        <div className="flex justify-center">
          <svg
            aria-hidden="true"
            className={
              isLoading
                ? "w-8 h-8 mr-2 text-coolor-2 animate-spin fill-black"
                : "hidden"
            }
            viewBox="0 0 100 101"
            fill="none"
          >
            {" "}
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

function App() {
  const init_board = (m) => {
    const template = {
      id: null,
      imgLink: null,
      isFilled: false,
    };

    // Use stringify and parse to copy the values instead of referencing them
    let board_arr = [
      ...Array(m)
        .fill(0)
        .map((x) => JSON.parse(JSON.stringify(template))),
    ];

    for (let i = 0; i < m; i++) {
      board_arr[i]["id"] = i;
    }
    return board_arr;
  };

  const [metaData, setMetaData] = useState(init_board(25));

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <header className="flex justify-center pb-6">
        <h1 className="text-3xl underline font-bold"> Book Bingo 2023 </h1>
      </header>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <Card
          stateChanger={setMetaData}
          metaData={metaData}
          id="0"
          prompt="About Vampires"
        />
        <Card
          id="1"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Title begins with the first letter of your name"
        />
        <Card
          id="2"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Oldest addition to TBR"
        />
        <Card
          id="3"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Set in forest or desert"
        />
        <Card
          id="4"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Buddy read"
        />

        <Card
          id="5"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Set in school or uni"
        />
        <Card
          id="6"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Multi-generational family"
        />
        <Card
          id="7"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="A book about books"
        />
        <Card
          id="8"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Memoir"
        />
        <Card
          id="9"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Villain's perspective"
        />

        <Card
          id="10"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Epistolary novel"
        />
        <Card
          id="11"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Set around end of year holidays"
        />
        <Card
          id="12"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Any 2023 BOtM"
        />
        <Card
          id="13"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Elderly protagonist"
        />
        <Card
          id="14"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="About zombies"
        />

        <Card
          id="15"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Big cat on cover"
        />
        <Card
          id="16"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="BOTM candidate"
        />
        <Card
          id="17"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Meant for younger readers"
        />
        <Card
          id="18"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Colour in the title"
        />
        <Card
          id="19"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="From your country of origin"
        />

        <Card
          id="20"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Features crafting"
        />
        <Card
          id="21"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Adapted for screen"
        />
        <Card
          id="22"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Climate themes"
        />
        <Card
          id="23"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Prize winner"
        />
        <Card
          id="24"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="Dystopian novel"
        />
      </div>
      <Export metaData={metaData} />
      <footer className="p-4 rounded-lg md:flex md:items-center justify-center md:p-6">
        <span className="text-sm sm:text-center">
          © 2023 Made with &hearts; by{" "}
          <a href="https://github.com/luoabd/" class="hover:underline">
            luoabd.
          </a>
        </span>
      </footer>
    </div>
  );
}

export default App;
