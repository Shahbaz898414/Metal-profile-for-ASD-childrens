import React from "react";
import { useCallback, useEffect, useState } from "react";
import { createWorker } from "tesseract.js";
import { Link } from "react-router-dom";
import './image1.css'

const Image1 = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [textResult, setTextResult] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);

  const worker = createWorker();

  const convertImageToText = useCallback(async () => {
    if (!selectedImage) return;
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    const { data } = await worker.recognize(selectedImage);
    const lowerCaseTextResult = data.text.toLowerCase(); // Convert textResult to lowercase
    setTextResult(lowerCaseTextResult);

    // Check for specific words in the text result
    const wordsToSearch = [
      "ferrous salt",
      "sulphate",
      "added sugar",
      "sugar",
      "ferrous sulfate",
    ];
    const lowerCaseWordsToSearch = wordsToSearch.map((word) =>
      word.toLowerCase()
    ); // Convert words to search to lowercase
    const foundWords = lowerCaseWordsToSearch.filter((word) =>
      lowerCaseTextResult.includes(word)
    );
    setErrorMessages(
      foundWords.length === 0
        ? ["not present"]
        : foundWords.map(
            (word) => wordsToSearch[lowerCaseWordsToSearch.indexOf(word)]
          )
    ); // Convert found words back to original case
  }, [worker, selectedImage]);

  useEffect(() => {
    convertImageToText();
  }, [selectedImage, convertImageToText]);

  const handleChangeImage = (e) => {
    if (e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    } else {
      setSelectedImage(null);
      setTextResult("");
      setErrorMessages([]);
    }
  };

  return (
    <div>
      <h1>Product Scanner</h1>
      <p>Gets words in image!</p>
      <div className="input-wrapper">
        <label htmlFor="upload">Upload Image</label>
        <input
          type="file"
          id="upload"
          accept="image/*"
          onChange={handleChangeImage}
        />
      </div>

      <div className="result">
        {selectedImage && (
          <div className="box-image">
            <img src={URL.createObjectURL(selectedImage)} alt="thumb" />
          </div>
        )}
        {textResult && (
          <div className="box-p">
            {textResult}
            <br />
            <p>
              {errorMessages.includes("not present") ? (
                "The product you are using is not harmful for your child"
              ) : (
                <span
                  style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
                >
                  {" This product is harmful for your child as it contains " +
                    errorMessages.join(", ")}
                </span>
              )}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Image1;
