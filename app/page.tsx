'use client';

import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Button } from "./components/Button";
import { Profile } from "./components/Profile";
import { Box } from "./components/Box";
export default function Home() {
  const { user, error, isLoading } = useUser();
  if (error) return <div>{error.message}</div>;
  
  

  return (
    <div className="h-screen flex items-center justify-center">
      {user ? (
        <Box height="h-[12rem]">
          <Profile user={user}/>
        </Box>
      ) : (
        
          <Box height="h-[10rem]">
            <h1 className="text-xl font-bold">
              Login to my app
            </h1>
            <Button
              label={isLoading ? "Loading..." : "Login"}
              redirect="/api/auth/login"
              disabled={isLoading}
            />
          </Box>
        
      )}
    </div>
  );
}
