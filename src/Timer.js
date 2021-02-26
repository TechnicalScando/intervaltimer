
class Timer {
  constructor (countdown) {
    this.countdown = countdown
    this.formattedCountdown = '00:00:00'
    this.timerInterval = null
    this.isRunning = false
    this.user = null
    this.hasUser = false

    this.formatTimer()
  }

  runTimer (callback) {
    if (!this.isRunning) {
      this.timerInterval = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--
          this.isRunning = true
          this.formatTimer()
          console.log(this.formattedCountdown)
        } else {
          this.stopTimer()
          if (typeof callback === 'function') {
            callback.call()
          }
        }
      }, 1000)
    }
  }

  stopTimer () {
    clearInterval(this.timerInterval)
    this.isRunning = false
  }

  resetTimer (countdown) {
    this.stopTimer()
    this.countdown = countdown
    this.formatTimer()
  }

  formatTimer () {
    const hours = ~~(this.countdown / 3600)
    const minutes = ~~((this.countdown % 3600) / 60)
    const seconds = ~~this.countdown % 60

    let finalFormat = ''
    hours > 0
      ? finalFormat += `${hours}:`
      : finalFormat += ''

    minutes < 10
      ? finalFormat += `0${minutes}`
      : finalFormat += `${minutes}`

    seconds < 10
      ? finalFormat += `:0${seconds}`
      : finalFormat += `:${seconds}`

    this.formattedCountdown = finalFormat
  }

  setUser (user) {
    if (this.user == null && !(this.user === user)) {
      this.user = user
    } else if (user == null) {
      this.user = user
    }
  }
}

module.exports = Timer
