"use strict"

function click(e) {
  chrome.tabs.executeScript({ file: "content.js" })
  //window.close()
}

document.addEventListener("DOMContentLoaded", () => {
  var form = document.getElementById("utmform")
  window.localStorage.setItem("medium", form.elements["medium"].value)

  form.addEventListener("change", () => {
    window.localStorage.setItem("medium", form.elements["medium"].value)
    window.localStorage.setItem("name", form.elements["name"].value)
    window.localStorage.setItem("team", form.elements["team"].value)
  })

  let button = document.getElementById("submit")
  button.addEventListener("click", click)
})
