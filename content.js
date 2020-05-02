var builtutm = `${window.location.href}?utm_source=${utm.medium}&utm_medium=${
  utm.name
}${utm.team}&utm_campaign=devex`

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

var result = copyToClipboard(builtutm)
// console.log("copied?", result)- for debugging
