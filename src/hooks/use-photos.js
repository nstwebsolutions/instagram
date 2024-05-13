import React, { useState, useEffect, useContext } from "react";

import UserContext from "../context/user";

import { getUserByUserId } from "../services/firebase";

import { getPhotos } from "../services/firebase";

const usePhotos = () => {
  const [photos, setPhotos] = useState(null);
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {
      const [{ following }] = await getUserByUserId(userId);
      let followedUserPhotos = [];
      if (following.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }
      followedUserPhotos.sort((a, b) => b.dateCreated - a.dateCreated);
      setPhotos(followedUserPhotos);
    }
    getTimelinePhotos();
  }, [userId]);

  return { photos };
};

export default usePhotos;
