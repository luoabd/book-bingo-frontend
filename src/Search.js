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
        src={
          props.data.volumeInfo.imageLinks
            ? props.data.volumeInfo.imageLinks.smallThumbnail
            : ""
        }
        style={{
          height: "40px",
          width: "40px",
          // borderRadius: "60%",
          marginRight: "10px",
        }}
      />
      {props.data.volumeInfo.title}
    </div>
  </Option>
);

function Search({ id, metaData, stateChanger, returnCover }) {
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const URL = config.url;

  // handle input change event
  const handleInputChange = (value) => {
    setValue(value);
  };

  // handle selection
  const handleChange = (value) => {
    setSelectedValue(value);

    const link = value?.volumeInfo.imageLinks.thumbnail;
    returnCover(link);

    // Create a temporary copy of your items array
    const itemsCopy = metaData.slice();
    // Find the index of the items where the item has the id you want
    const idx = itemsCopy.findIndex((x) => x.id === parseInt(id));
    // Re-assign the item to have the same values as before (name and id), but change the checked to true
    itemsCopy[idx] = { ...itemsCopy[idx], imgLink: link, isFilled: true };

    // Update the state with our modified copy
    stateChanger(itemsCopy);
  };

  // load options using API call
  const loadOptions = (inputValue) => {
    return fetch(`${URL}/api?search_q=${inputValue}}`)
      .then((res) => res.json())
      .then((data) => data);
  };

  return (
    <div className="">
      <AsyncSelect
        components={{ Option: IconOption }}
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={(e) => (e.volumeInfo ? e.volumeInfo.title : "")}
        getOptionValue={(e) => e.id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
