import React, { useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "../../firebase.js";
import firebase from "firebase/app";
import "firebase/firestore";
const Post = ({ imageUrl, username, user, caption, postId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    } else {
      setComments([]);
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (e) => {
    e.preventDefault();
    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };

  /*
    return () => {
      unsubscribe()
    }
  },[postId])
  */
  return (
    <div className="post">
      <div className="post__header">
        {/* Header => Avatar + Username */}

        <Avatar
          className="post__avatar"
          alt="ShahabAli"
          src="/static/images/avatar/1.jpg"
        />
        <h3>{username}</h3>
      </div>
      {/* image */}

      <img src={imageUrl} alt="" className="post__image" />

      <h4 className="post__text">
        <strong>{username}:</strong>
        {caption}
      </h4>

      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>
      {user && (
        <form className="post__commentBox">
          <input
            className="post__input"
            type="text"
            placeholder="Add Comment......."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></input>

          <button
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            Post Comment
          </button>
        </form>
      )}

      {/* username + caption */}
    </div>
  );
};

export default Post;
