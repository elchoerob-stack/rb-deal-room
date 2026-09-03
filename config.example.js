/* Copy this file to config.js and paste your Firebase web config into it.
   config.js is git-ignored, so your project details stay out of the repo.

   Without config.js the app runs exactly as it does now: everything is
   kept on the device it was typed on, and nothing is sent anywhere.

   The Firebase web config is not a secret — it identifies the project,
   it does not grant access. Access is decided by firestore.rules and by
   who is signed in. */

window.RB_CONFIG = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
  },
  workspace: "rb-brand",   // one shared workspace for the team
};
