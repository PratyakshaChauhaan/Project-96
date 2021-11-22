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

    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "addind room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location ="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name" , name);
window.location = "kwitter_page.html"; 
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}