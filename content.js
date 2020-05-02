let medium = window.localStorage.getItem("medium")
let name = window.localStorage.getItem("name")
let team = window.localStorage.getItem("team")

var utm = `${
  window.location.href
}?utm_source=${medium}&utm_medium=${name}${team}&utm_campaign=devex`

console.log(utm)
