"use strict"

function saveChanges(type) {
  let inputs = document.getElementById("utmform").elements
  let formtype = inputs[type]

  if (!formtype) {
    message("Error: No value specified")
    return
  }

  // Save it using the Chrome extension storage API.
  chrome.storage.sync.set({ type: formtype }, function() {
    // Notify that we saved.
    message("Settings saved")
  })
}

function click(e) {
  chrome.storage.local.set({ isPaused: false })
  //window.localStorage.setItem('medium', 'twitter');
  //chrome.storage.sync.set('medium', 'twitter')
  //saveChanges('medium')

  // let medium = chrome.storage.sync.get('isPaused')
  // console.log(medium)

  chrome.tabs.executeScript({ file: "content.js" })
  window.close()
}

document.addEventListener("DOMContentLoaded", () => {
  var inputs = document.getElementById("utmform").elements
  console.log(inputs)

  let button = document.getElementById("submit")
  button.addEventListener("click", click)
})
