"use strict"

function click(e) {
  chrome.tabs.executeScript({ file: "content.js" })
  //window.close()
}

document.addEventListener("DOMContentLoaded", () => {
  var form = document.getElementById("utmform")
  form.elements["medium"].defaultValue = "twitter"

  form.addEventListener("change", () => {
    window.localStorage.setItem("medium", form.elements["medium"].value)
    window.localStorage.setItem("name", form.elements["name"].value)
    window.localStorage.setItem("team", form.elements["team"].value)
  })

  let button = document.getElementById("submit")
  button.addEventListener("click", click)

  var utm = `${window.location.href}?utm_source=${
    form.elements["medium"].value
  }&utm_medium=${form.elements["name"].value}${
    form.elements["team"].value
  }&utm_campaign=devex`

  form.elements["utm"].value = utm
})
