import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { components } from "react-select";
import { config } from "./Constants";
const { Option } = components;

const IconOption = (props) => (
  <Option {...props}>
    <div>
      {/* todo: Change from inline css */}
      <img
        alt=""
        src={props.data.imgLink ? props.data.imgLink : ""}
        style={{
          height: "40px",
          width: "40px",
          marginRight: "10px",
        }}
      />
      {props.data.title} {props.data.releaseDate ? `(${props.data.releaseDate})` : ''}
    </div>
  </Option>
);

function GameSearch({ id, metaData, stateChanger, returnCover }) {
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const URL = config.url;

  // handle input change event
  const handleInputChange = (value) => {
    setValue(value);
  };

  // handle selection
  const handleChange = async (value) => {
    setSelectedValue(value);

    const link = value?.imgLink;
    returnCover(link);

    // Create a temporary copy of your items array
    const itemsCopy = metaData.slice();
    // Find the index of the items where the item has the id you want
    const idx = itemsCopy.findIndex((x) => x.id === parseInt(id));
    // Re-assign the item to have the same values as before (name and id), but change the checked to true
    itemsCopy[idx] = {
      ...itemsCopy[idx],
      title: value?.title,
      author: null,
      imgLink: link,
      isFilled: true,
    };

    // Update the state with our modified copy
    stateChanger(itemsCopy);
  };

  // load options using API call
  const loadOptions = (inputValue) => {
    async function fetchSearchResults() {
      const response = await fetch(`${URL}/games/search?q=${inputValue}`);
      const games = await response.json();
      let arr = Object.keys(games).map((k) => games[k]);
      return arr;
    }
    return fetchSearchResults();
  };

  return (
    <div className="">
      <AsyncSelect
        components={{ DropdownIndicator: null, Option: IconOption }}
        cacheOptions
        placeholder={"Search for a game"}
        value={metaData[id].title ? selectedValue : ""}
        getOptionLabel={(e) => e.title}
        getOptionValue={(e) => e.id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
    </div>
  );
}

export default GameSearch;
