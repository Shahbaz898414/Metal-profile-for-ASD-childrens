import React, { useState } from "react";
import "./image2.css";
import data from "./file.json";

const Image2 = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    const itemName = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // If checked, add the item to the selectedItems array
      setSelectedItems([...selectedItems, itemName]);
    } else {
      // If unchecked, remove the item from the selectedItems array
      setSelectedItems(selectedItems.filter((item) => item !== itemName));
    }
  };

  // Function to print selected items from JSON
  const printSelectedItems = () => {
    const selectedData = selectedItems.map((itemName) => {
      return {
        [itemName]: data[itemName] // Retrieve data from JSON using the item name
      };
    });

    // Check if more than 4 checkboxes are selected
    if (selectedItems.length > 4) {
      // Display pop-up message
      alert("HI=Hazard index (>1 is not advisable)");
    }else {
      alert("HI=Hazard index (< 1 is  advisable)");
    }

    console.log(selectedData);
  };

  return (
    <div className="container">
      <h1>Metal profile for ASD children</h1>
      <br />
      {/* Checkbox inputs */}
      {Object.keys(data).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          {/* Iterate over each food item in the category */}
          {Object.keys(data[category]).map((itemName) => (
            <div key={itemName}>
              <input
                type="checkbox"
                id={itemName}
                name="material"
                value={itemName}
                onChange={handleCheckboxChange}
              />
              <label htmlFor={itemName}>{itemName}</label>
              {/* Display inner values of the selected item */}
              {selectedItems.includes(itemName) && (
                <div>
                  <h3>Inner Values:</h3>
                  <ul>
                    {Object.entries(data[category][itemName]).map(
                      ([key, value]) => (
                        <li key={key}>
                          {key}: {value}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
      {/* Button to print selected items */}
      <br />
      <button onClick={printSelectedItems}>Print Selected Items</button>
    </div>
  );
};

export default Image2;


/*


THQ= CDI/RfD = (Cveg*IRveg*EFveg*ED*10^-3)/(BW*AT*Rfd)


*/