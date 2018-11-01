/* global fetch */

function visit() {
  let vc = document.getElementById("visitCount");
  vc.innerHTML = 123;
  //let u = "https://sheekswallow.netlify.com/.netlify/functions/visit";
  let u = 'https://study-sheekswallow.c9users.io:8082/.netlify/functions/visit';
  console.log('visit', u);
  // fetch(u, {
  //   method: "GET",
  //   mode: "cors",
  //   cache: "no-cache",
  //   credentials: "same-origin",
  //   redirect: "follow", // manual, *follow, error
  //   referrer: "no-referrer", // no-referrer, *client
  // })
  fetch(u)
  .then(res => res.json())
  .then(res => {
    vc.innerHTML = 'res.status';
  })
  .catch(error => console.error('Error:', error));
}

function createFolder() {
  let cf = document.getElementById("createFolderInput");
  let cfm = document.getElementById("createFolderMsg");
  let data = { foldername: cf.value };
  fetch('/dropbox/createfolder', {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, same-origin, *omit
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      //"Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  .then(res => res.json())
  .then(res => {
    cfm.innerHTML = res.status;
  })
  .catch(error => console.error('Error:', error));
}

(function(){
  visit();
  document.getElementById("createFolderSubmit").addEventListener("click", function(e) {
    e.preventDefault();
    createFolder();
  });
})();