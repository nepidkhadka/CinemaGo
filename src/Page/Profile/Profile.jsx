import React, { useEffect, useState } from "react";
import { UserAuth } from "../../Context/AuthContext";
import "./Profile.css";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../Services/firebase";
import Card from "../../Components/Cards/Card";

const Profile = () => {
  const [favouriteMovie, setfavouriteMovie] = useState();
  const { user } = UserAuth();

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) setfavouriteMovie(doc.data().favourite);
      });
    }
  }, [user?.email]);

  return (
    <>
      <div className="user-main">
      <p id="favtitle" >My Favourite</p>
        <div className="username-container">
          <div className="profile-container">
            <div className="profile-img">
              <img
                src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png"
                alt="Profile Picture"
              />
            </div>
            <div className="profile-description">
              <p className="user-title">{user?.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite">
        <div className="favlist">
          {favouriteMovie &&
            favouriteMovie.map((movie) => (
              <Card key={movie.original_title} movie={movie} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
