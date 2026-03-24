import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://gym-personal-trainer-1.onrender.com",
});

// authClient.signIn.social({
//     provider: 'google'
// })