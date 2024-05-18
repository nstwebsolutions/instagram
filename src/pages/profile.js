import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { getUserByUsername } from "../services/firebase";
import Header from "../components/header";
import UserProfile from "../components/profile";

const Profile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function checkUserExists() {
      const [user] = await getUserByUsername(username);
      if (user?.userId) {
        setUser(user);
      } else {
        navigate(ROUTES.NOT_FOUND);
      }
    }
    checkUserExists();
  }, [username, navigate]);

  return user?.username ? (
    <div className='bg-gray-background'>
      <Header />
      <div className='mx-auto max-w-screen-lg'>
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
};

export default Profile;
