var firebaseConfig = {
    apiKey: "AIzaSyDHEVmC_aET7PJeGGm-Wi3QQT7Q-D7xDtQ",
    authDomain: "schoolsystem-82509.firebaseapp.com",
    projectId: "schoolsystem-82509",
    storageBucket: "schoolsystem-82509.appspot.com",
    messagingSenderId: "243111516832",
    appId: "1:243111516832:web:5d4a8f07ebcafb6c4c47c5"
  };
firebase.initializeApp(firebaseConfig); 


const btn = document.getElementById('#btn');
btn.addEventListener('submit', function(e){
    e.preventDefault();

    var user2 = document.getElementById('first-name');
    var midd = document.getElementById('middle-name');
    var last = document.getElementById('last-name');
    var mail = document.getElementById('E-mail');
    var pass = document.getElementById('password?');
    firebase.auth().createUserWithEmailAndPassword(user2.value, pass.value)
    .then(function(response){
        console.log('succuess');
        console.log(response);
        firebase.database().ref('users').push({
            userName: userName.value,
            userId:firebase.auth().currentUser.userId,
            email:firebase.auth().createUser.email})

        firebase.auth().signOut();
        user2.value='';
        pass.value='';
        midd.value='';
        last.value='';
        mail.value='';

    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage)
    })

})


