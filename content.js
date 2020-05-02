var medium = window.localStorage.getItem("medium")
var name = window.localStorage.getItem("name")
var team = window.localStorage.getItem("team")

if (name === null || name === undefined) name = "defaultproj"
if (team === null || team === undefined) team = "-tzm"

var utm = `${
  window.location.href
}?utm_source=${medium}&utm_medium=${name}${team}&utm_campaign=devex`

function copyToClipboard(text) {
  var textarea = document.createElement("textarea")
  textarea.textContent = text
  textarea.style.position = "fixed"
  textarea.style.left = "-1000px"
  document.body.appendChild(textarea)
  textarea.select()

  try {
    return document.execCommand("copy")
  } catch (ex) {
    console.warn("Copy to clipboard failed.", ex)
    return false
  } finally {
    document.body.removeChild(textarea)
  }
}

var result = copyToClipboard(utm)
console.log("copied?", result)
