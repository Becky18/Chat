var firebaseConfig = {
    apiKey: "AIzaSyDWV0uS-YrtFaHiV-LhowoWnrnTASP0RVo",
    authDomain: "gwen-kwitter-10.firebaseapp.com",
    databaseURL: "https://gwen-kwitter-10-default-rtdb.firebaseio.com",
    projectId: "gwen-kwitter-10",
    storageBucket: "gwen-kwitter-10.appspot.com",
    messagingSenderId: "206558092002",
    appId: "1:206558092002:web:e011977e55b77ae8d45cbb"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  room_name = localStorage.getItem("room_name")
user_name = localStorage.getItem("user_name")
function send() {
      msg = document.getElementById("msg").value
      firebase.database().ref(room_name).push
            (
                  {
                        name: user_name,
                        message: msg,
                        likes: 0
                  }
            )
      document.getElementById("msg").value = ""
}