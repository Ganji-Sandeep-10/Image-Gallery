import { useState } from "react";
import "./styles.css";

function App() {
  const images = [
    "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  const [display, setDisplay] = useState(null);
  return (
    <div>
      <div className="App">
        <h1>Image Gallery</h1>
        <p>
          <u>Click on a image..!</u>
        </p>
        {images.map((image, index) => (
          <img
            src={image}
            alt={index}
            style={{
              height: "150px",
              width: "150px",
              objectFit: "cover",
              borderRadius: "10px",
              padding: "5px",
            }}
            onClick={() => {
              setDisplay(image);
            }}
          />
        ))}
        {display && (
          <div>
            <p>Your selected image</p>
            <img
              src={display}
              alt="selected image"
              style={{ height: "400px", width: "400px", objectFit: "cover" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
