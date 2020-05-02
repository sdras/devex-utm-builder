"use strict"

function passUTM(utm) {
  chrome.tabs.executeScript(
    { code: "var utm = " + JSON.stringify(utm) },
    function() {
      chrome.tabs.executeScript({ file: "content.js" })
    }
  )
}

document.addEventListener("DOMContentLoaded", () => {
  var form = document.getElementById("utmform")
  form.elements["medium"].defaultValue = "twitter"

  form.addEventListener("change", () => {
    window.localStorage.setItem("medium", form.elements["medium"].value)
    window.localStorage.setItem("name", form.elements["name"].value)
    window.localStorage.setItem("team", form.elements["team"].value)
  })

  var utm = {
    medium: window.localStorage.getItem("medium"),
    name: window.localStorage.getItem("name"),
    team: window.localStorage.getItem("team"),
  }

  if (utm.name === null) utm.name = "defaultproj"
  if (utm.team === null) utm.team = "-tzm"

  let button = document.getElementById("submit")
  button.addEventListener("click", () => {
    passUTM(utm)
    button.innerHTML = "Copied to the clipboard!"
  })
})
