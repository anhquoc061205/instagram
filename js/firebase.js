const firebaseConfig = {
    apiKey: "AIzaSyBPpy3hK6rvVaI95akMxSI__55hzn-YVy0",
    authDomain: "instagram-f2ead.firebaseapp.com",
    projectId: "instagram-f2ead",
    storageBucket: "instagram-f2ead.appspot.com",
    messagingSenderId: "15618585793",
    appId: "1:15618585793:web:d680f5e47ec8acbbcc5040",
    measurementId: "G-2H6TFY56B0"
  };

  firebase.initializeApp(firebaseConfig);

    var provider = new firebase.auth.GoogleAuthProvider();

    async function loginGoogle(){
       const response = firebase.auth().signInWithPopup(provider);
       console.log(response.user);
       console.log(response.user.displayName);
       console.log(response.user.email);
       console.log(response.user.photoURL);

       const user = {
        fullname: response.user.displayName,
        email: response.user.email,
        avatar: response.user.photoURL.replaceAll("=s96-c",""),
        
       };
       console.log(user);
       window.location.href = "/index.html"
    }
