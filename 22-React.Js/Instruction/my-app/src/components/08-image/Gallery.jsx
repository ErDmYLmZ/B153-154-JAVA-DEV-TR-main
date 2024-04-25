import React from "react";
import "./gallery.scss";
import resimler from "../../assets/data/image.json";

const Gallery = () => {
  return (
    <div>
      <h2>Image Gallery</h2>

      <div className="img-gallery">
        {resimler.map((img, index) => (
          <div key={index}>
            <img src={require(`../../assets/img/${img.name}`)} alt="resimler" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
