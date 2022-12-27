var finalDate = new Date('jan 1, 2023 00:00:00').getTime()

var x = setInterval(function () {
  var today = new Date().getTime()
  var remainingDays = finalDate - today

  var days = Math.floor(remainingDays / (1000 * 60 * 60 * 24))
  var hours = Math.floor(
    (remainingDays % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  )
  var minutes = Math.floor((remainingDays % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((remainingDays % (1000 * 60)) / 1000)

  days < 10
    ? (document.getElementById('days').innerHTML = `0${days}`)
    : (document.getElementById('days').innerHTML = `${days}`)
  hours < 10
    ? (document.getElementById('hours').innerHTML = `0${hours}`)
    : (document.getElementById('hours').innerHTML = `${hours}`)
  minutes < 10
    ? (document.getElementById('minutes').innerHTML = `0${minutes}`)
    : (document.getElementById('minutes').innerHTML = `${minutes}`)
  seconds < 10
    ? (document.getElementById('seconds').innerHTML = `0${seconds}`)
    : (document.getElementById('seconds').innerHTML = `${seconds}`)

  if (t < 0) {
    clearInterval(x)
    document.getElementById('countdown').innerHTML = 'EXPIRED'
  }
}, 1000)
