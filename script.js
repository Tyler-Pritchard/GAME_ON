var ref = firebase.database().ref();
ref.on("value", function (snapshot) {
    output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
});