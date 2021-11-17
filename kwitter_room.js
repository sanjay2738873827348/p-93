
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDadrT-NQkWJeWYrmEDGFJUMyt5_AHlep0",
      authDomain: "pgb-ffe34.firebaseapp.com",
      databaseURL: "https://pgb-ffe34-default-rtdb.firebaseio.com",
      projectId: "pgb-ffe34",
      storageBucket: "pgb-ffe34.appspot.com",
      messagingSenderId: "284412373887",
      appId: "1:284412373887:web:9bd7d480c1b9e61f76884a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;

             firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToroomname(name){
      console.log(name);
      localStorage.setItem("Roomname",name);
      window.location = "kwitter_page.html";
}
function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem("Roomname");
      window.location = "index.html";
}