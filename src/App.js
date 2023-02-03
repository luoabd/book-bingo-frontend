import React, { useState } from "react";
import Search from "./Search";

function Card({ stateChanger, metaData, id, prompt }) {
  // const [ title, setTitle ] = useState('')
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
        {/* <footer className="overflow-y-scroll items-center text-center">
          {title}
        </footer> */}
      </div>
    </div>
  );
}

function Export({ metaData }) {
  const handleButton = async () => {
    const response = await fetch(`http://localhost:3000/canvas`, {
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
  };
  return (
    <div className="flex justify-center">
      <button
        className="bg-coolor-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleButton}
      >
        Export to a picture
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
    <div className="container my-12 mx-auto px-4 md:px-12 bg-slate-300">
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
          prompt="Mutli-generational family"
        />
        <Card
          id="7"
          stateChanger={setMetaData}
          metaData={metaData}
          prompt="A book abput books"
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
        <span className="text-sm text-gray-500 sm:text-center">
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
