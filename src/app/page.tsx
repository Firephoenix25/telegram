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