/*


import React, { useState, useEffect } from "react";
import "./ImageUpload.css";
import { Button } from "@material-ui/core";
import { storage, db } from "../../firebase.js";
import firebase from "firebase/app";
import "firebase/firestore";
const ImageUpload = ({ username }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //process function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        //error function
        console.log(error);
        alert(error.message);
      },
      () => {
        //complete function
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              username: username,
            });

            setProgress(0);
            setCaption("");
            setImage(null);
          });
      }
    );
  };

  return (
    <div className="imageupload">
      {/* storing posts */ /*}

      {/* Progress Indicator */ /*}
  /*
      <progress className="imageupload__progress" value={progress} max="100" />
      {/* Caption Input */ /*}
    /*
      <input
        type="text"
        value={caption}
        placeholder="Enter a Caption"
        onChange={(e) => setCaption(e.target.value)}
      />

      {/* file picker */ /*}
      
      /*
      <input type="file" onChange={handleChange} />
      {/* post button */ /*}
/*
      <Button onClick={handleUpload}>Upload</Button>
    </div>
  );
};

export default ImageUpload;
*/

import React, { useState, useEffect } from "react";
import "./ImageUpload.css";
import { storage, db } from "../../firebase.js";

const ImageUpload = () => {
  const [image, setImage] = useState("");
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImage = () => {
    const upload = storage.ref(`images/${image.name}`).put(image);

    upload.on(
      "state_changed",
      (snapshot) => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalbytes) * 100;
        setProgress(progress);
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              imageUrl: url,
              caption: caption,
              username: "Shahab",
            });
          });
        setImage(null);
        setCaption("");
        setProgress(0);
      }
    );
  };

  return (
    <div className="imageUpload">
      <progress
        className="imageUpload__progress"
        value={progress}
        max="100"
      ></progress>
      <input
        type="text"
        className="imageUpload__caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={handleChange} />
      <button className="imageUpload__button" onClick={uploadImage}>
        Upload
      </button>
    </div>
  );
};

export default ImageUpload;
