import React, { useState } from "react";
import Search from "./Search";
import StarRating from "./StarRating";

function Card({ stateChanger, metaData, id, prompt }) {
  const [cover, setCover] = useState(metaData[id].imgLink || "https://picsum.photos/600/400/?random");
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
        <div className={metaData[id].isFilled ? "block" : "hidden"}>
          <StarRating id={id} metaData={metaData} stateChanger={stateChanger} />
        </div>
      </div>
    </div>
  );
}

export default Card;
