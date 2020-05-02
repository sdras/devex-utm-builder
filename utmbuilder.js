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
  var utm = {},
    form = document.getElementById("utmform"),
    button = document.getElementById("submit")

  form.elements["team"].defaultValue = window.localStorage.getItem("team")

  form.addEventListener("change", () => {
    utm = {
      medium: form.elements["medium"].value,
      name: form.elements["name"].value,
      team: form.elements["team"].value,
    }
    window.localStorage.setItem("team", form.elements["team"].value)
  })

  if (utm.name === null || utm.name === undefined) utm["name"] = "defaultproj"
  if (utm.team === null || utm.team === undefined) utm["team"] = "-tzm"

  button.addEventListener("click", () => {
    passUTM(utm)
    button.innerHTML = "Copied to the clipboard!"
  })
})
