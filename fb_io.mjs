//**************************************************************/
// fb_io.mjs
// Generalised firebase routines
// Written by <Your Name Here>, Term 2 202?
//
// All variables & function begin with fb_  all const with FB_
// Diagnostic code lines have a comment appended to them //DIAG
/**************************************************************/
const COL_C = 'white';	    // These two const are part of the coloured 	
const COL_B = '#CD7F32';	//  console.log for functions scheme
console.log('%c fb_io.mjs',
  'color: blue; background-color: white;');

/**************************************************************/
// Import all external constants & functions required
/**************************************************************/
// Import all the methods you want to call from the firebase modules


import { initializeApp }
  from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase }
  from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
  import { getAuth, GoogleAuthProvider, signInWithPopup }
  from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
  import { onAuthStateChanged }

from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { signOut }

from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

import { ref, set }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

    import { get }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

    import { update }

    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

/**************************************************************/
// EXPORT FUNCTIONS
// List all the functions called by code or html outside of this module
/**************************************************************/




export {
  fb_initialise,
  fb_authenticate,
  fb_detectloginchange,
  fb_logout,
  fb_WriteRec,
  fb_ReadRec,
  fb_ReadAll,
  fb_UpdateRec,
  fb_wreakhavok
};
/******************************************************/
// fb_login()
// Called by html LOGIN button
// Login to Firebase via Google authentication
// Input:  n/a
// Return: n/a
/******************************************************/
function fb_initialise() {
  console.log('%c fb_initialise(): ',
    'color: ' + COL_C + '; background-color: ' + COL_B + ';');
  const firebaseConfig = {
    apiKey: "AIzaSyCwPibZHntricqhOchcdlX3H7ve_CFQhR0",
    authDomain: "comp-2025-caleb-lowe-31f01.firebaseapp.com",
    databaseURL: "https://comp-2025-caleb-lowe-31f01-default-rtdb.firebaseio.com",
    projectId: "comp-2025-caleb-lowe-31f01",
    storageBucket: "comp-2025-caleb-lowe-31f01.firebasestorage.app",
    messagingSenderId: "440676386005",
    appId: "1:440676386005:web:05b4cb8a914c0ceb0ace5c",
    measurementId: "G-WGYBNEYVY3"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const firebaseGameDB = getDatabase(app);
  console.info(firebaseGameDB);
  document.getElementById("p_fbInitialise").innerHTML = "Button Clicked";
}

function fb_authenticate() {console.log('%c fb_authenticate(): ',
  'color: ' + COL_C + '; background-color: ' + COL_B + ';');
  const AUTH = getAuth();

  



    const PROVIDER = new GoogleAuthProvider();

    // The following makes Google ask the user to select the account

PROVIDER.setCustomParameters({

        prompt: 'select_account'

    });

    signInWithPopup(AUTH, PROVIDER).then((result) => {

        //✅ Code for a successful authentication goes here
        console.log("successful authentication")
        
    })

    .catch((error) => {

        //❌ Code for an authentication error goes here
        console.log("authentication error")
    });
    document.getElementById("p_fbAuthenticate").innerHTML= "Authentication success"};

    function fb_detectloginchange() {
      console.log('%c fb_loginchangedetected(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';');
        const AUTH = getAuth();
      onAuthStateChanged(AUTH, (user) => {

        if (user) {
  
            //✅ Code for user logged in goes here
          console.log("user login successful")
        } else {
  
            //✅ Code for user logged out goes here
            console.log("user log out successful")
        }
  
    }, (error) => {
  
        //❌ Code for an onAuthStateChanged error goes here
        console.log("onAuthStateChanged error")
    });
    
    document.getElementById("p_fbdetectloginchange").innerHTML= "Login change detected"
    };

    function fb_logout() {
      console.log('%c fb_logout(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';');
        const AUTH = getAuth();
      
        signOut(AUTH).then(() => {

          //✅ Code for a successful logout goes here
  console.log("successful logout")
      })
  
      .catch((error) => {
  
          //❌ Code for a logout error goes here
          console.log("logout error")
      });
      document.getElementById("p_fblogout").innerHTML= "logout"
    };


    //function fb_WriteRec incomplete
    function fb_WriteRec() {
      console.log('%c fb_WriteRec(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';');
        const DB = getDatabase()
        const dbReference = ref(DB, "Test/data");

        set(dbReference, {hello: 'hi', test: 'testing'}).then(() => {
    
            //✅ Code for a successful write goes here
    console.log("successful write")
        }).catch((error) => {
    
            //❌ Code for a write error goes here
    console.log("Writing error")
        });
          document.getElementById("p_fbWriteRec").innerHTML= "Record written"
    }

     function fb_ReadRec() {
      console.log('%c fb_ReadRec(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';');
      const DB = getDatabase()
      const dbReference= ref(DB, "Test/data/hello");

    get(dbReference).then((snapshot) => {

        var fb_data = snapshot.val();

        if (fb_data != null) {

            //✅ Code for a successful read goes here
console.log("successful read")
console.log(fb_data)
        } else {

            //✅ Code for no record found goes here
console.log("no record found")
        }

    }).catch((error) => {

        //❌ Code for a read error goes here
console.log("read error")
console.log(error)
    });
  document.getElementById("p_fbReadRec").innerHTML= "Record Read"
  }

  function fb_ReadAll() {
    console.log('%c fb_ReadAll(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';');
         const DB = getDatabase()
      const dbReference= ref(DB, "Test/data/");
    

    get(dbReference).then((snapshot) => {

        var fb_data = snapshot.val();

        if (fb_data != null) {

            //✅ Code for a successful read all goes here
          console.log("successfully read all")
          console.log(fb_data)
        } else {

            //✅ Code for no record found goes here
      console.log("no record found")
        }

    }).catch((error) => {

        //❌ Code for a read all error goes here
            console.log("error")
    });
   document.getElementById("p_fbReadAll").innerHTML= "Read all"
  }

  function fb_UpdateRec() { 
    console.log('%c fb_UpdateRec(): ',
        'color: ' + COL_C + '; background-color: ' + COL_B + ';');
    const DB = getDatabase()
    const dbReference= ref(DB, "Test/data");

    update(dbReference, {hello: "hello", test: "test"}).then(() => {

        //✅ Code for a successful update goes here
        console.log("successful update")
    }).catch((error) => {

        //❌ Code for a update error goes here
        console.log("failed update")
    });
    document.getElementById("p_fbUpdateRec").innerHTML= "Updated record"
  }

  function fb_wreakhavok() {
    console.log("Data gone");
    const firebaseConfig =     {
        apiKey: "AIzaSyAQ3Qc6Ej_4YvNXCAjqsfLoA8p75j3R7-8",
        authDomain: "comp2025-ryan-parks.firebaseapp.com",
        databaseURL: "https://comp2025-ryan-parks-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "comp2025-ryan-parks",
        storageBucket: "comp2025-ryan-parks.firebasestorage.app",
        messagingSenderId: "73072219046",
        appId: "1:73072219046:web:7608445213a3fd3e973567",
        measurementId: "G-R89L1J8Z4D"
    };
        // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const firebaseGameDB = getDatabase(app);
    console.info(firebaseGameDB);
    document.getElementById("p_fbInitialise").innerHTML = "Initialised";

    const DB = getDatabase()
    const dbReference= ref(DB, "/");

    set(dbReference, {error:"null", error1:"null", error2:"null", error3:"null", error4:"null", error5:"null", error6:"null", error7:"null", error8:"null", error9:"null", error10:"null", error11:"null"}).then(() => {

        //✅ Code for a successful write goes here
        console.log("success write");

    }).catch((error) => {

        //❌ Code for a write error goes here
         console.log("fail write");
         console.log(error);

    });

  }
  
/**************************************************************/
// END OF CODE
/**************************************************************/