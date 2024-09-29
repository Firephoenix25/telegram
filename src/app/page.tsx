'use client';

import { useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";

interface WebAppUser {
  id: number;
  is_bot?: boolean;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}

export default function HomePage() {
  const [userData, setUserData] = useState<WebAppUser | null>(null);

  useEffect(() => {
    if (WebApp.initDataUnsafe.user) setUserData(WebApp.initDataUnsafe.user as WebAppUser);
  }, []);
  return (
    <>
      {
        userData ? (
          <div>
            <h1>Hello, {userData.first_name}!</h1>
            <p>Your user ID is {userData.id}.</p>
            <p>Your username is {userData.username}.</p>
            <p>Your photo URL is {userData.photo_url}.</p>
            <p>Your language code is {userData.language_code}.</p>
            <p>Your is_premium is {userData.is_premium}.</p>
            <p>Your is_bot is {userData.is_bot}.</p>
            <p>Your first_name is {userData.first_name}.</p>
            <p>Your last_name is {userData.last_name}.</p>

          </div>
        )
          :
          <div>
            <h1>Loading...</h1>
          </div>
      }
    </>
  );
}