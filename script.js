var ref = firebase.database().ref();
ref.on("value", function (snapshot) {
    output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
});

//globals: $, jQuery and Tether, see config

import 'bootstrap';
// adds all custom Bootstrap jQuery plugins
// see all plugins here: http://getbootstrap.com/javascript/

document.addEventListener('DOMContentLoaded', () => {
  // do your setup here
  console.log('Initialized app');
  if ($('btn')) {
    console.log('jQuery works')
  }
});