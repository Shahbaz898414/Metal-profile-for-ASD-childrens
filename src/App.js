// import { useCallback, useEffect, useState } from "react";
// import { createWorker } from "tesseract.js";
// import { Link } from "react-router-dom";
import "./App.css";
import Image1 from "./image1";
import Image2 from "./image2";

function App() {
  // const [selectedImage, setSelectedImage] = useState(null);
  // const [textResult, setTextResult] = useState("");
  // const [errorMessages, setErrorMessages] = useState([]);

  // const worker = createWorker();

  // const convertImageToText = useCallback(async () => {
  //   if (!selectedImage) return;
  //   await worker.load();
  //   await worker.loadLanguage("eng");
  //   await worker.initialize("eng");
  //   const { data } = await worker.recognize(selectedImage);
  //   const lowerCaseTextResult = data.text.toLowerCase(); // Convert textResult to lowercase
  //   setTextResult(lowerCaseTextResult);

  //   // Check for specific words in the text result
  //   const wordsToSearch = [
  //     "ferrous salt",
  //     "sulphate",
  //     "added sugar",
  //     "sugar",
  //     "ferrous sulfate",
  //   ];
  //   const lowerCaseWordsToSearch = wordsToSearch.map((word) =>
  //     word.toLowerCase()
  //   ); // Convert words to search to lowercase
  //   const foundWords = lowerCaseWordsToSearch.filter((word) =>
  //     lowerCaseTextResult.includes(word)
  //   );
  //   setErrorMessages(
  //     foundWords.length === 0
  //       ? ["not present"]
  //       : foundWords.map(
  //           (word) => wordsToSearch[lowerCaseWordsToSearch.indexOf(word)]
  //         )
  //   ); // Convert found words back to original case
  // }, [worker, selectedImage]);

  // useEffect(() => {
  //   convertImageToText();
  // }, [selectedImage, convertImageToText]);

  // const handleChangeImage = (e) => {
  //   if (e.target.files[0]) {
  //     setSelectedImage(e.target.files[0]);
  //   } else {
  //     setSelectedImage(null);
  //     setTextResult("");
  //     setErrorMessages([]);
  //   }
  // };

  return (
    <div className="App">
      <Image1 />
      <br />
      <br />
      <Image2 />
      
    </div>
  );
}

export default App;
