
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyAs_l53cNLO8R0nzDUlDqCSGNCIOmBiP80",
      authDomain: "kwitter-28a43.firebaseapp.com",
      databaseURL: "https://kwitter-28a43-default-rtdb.firebaseio.com",
      projectId: "kwitter-28a43",
      storageBucket: "kwitter-28a43.appspot.com",
      messagingSenderId: "23835514181",
      appId: "1:23835514181:web:8d67f6e179f147b6e89a2c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
