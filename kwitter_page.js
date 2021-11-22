const firebaseConfig = {
      apiKey: "AIzaSyBAzXwFczgGMabONtBDfCgdEC_DE19yp9s",
      authDomain: "project-96-d9df0.firebaseapp.com",
      databaseURL: "https://project-96-d9df0-default-rtdb.firebaseio.com",
      projectId: "project-96-d9df0",
      storageBucket: "project-96-d9df0.appspot.com",
      messagingSenderId: "999162903791",
      appId: "1:999162903791:web:f4882ce56be7736446ef1a",
      measurementId: "G-1V02JH1JZ7"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

 room_name = localStorage.getItem("room_name");
 user_name = localStorage.getItem("user_name");

 function send()
 {
       msg=document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });
      document.getElementById("msg").value="";
 }
 function logout()
 {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="index.html";
 }