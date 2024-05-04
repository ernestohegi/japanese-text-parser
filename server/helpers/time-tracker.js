import moment from 'moment'

let START_DATE

const recordTime = () => (START_DATE = moment())

const init = () => {
  recordTime()
}

const track = (message) => {
  if (START_DATE === undefined) {
    console.warn(
      'Time Tracker: init() needs to be called before time tracking.'
    )
    return false
  }

  console.log(message, moment().diff(START_DATE, 'miliseconds'))

  recordTime()
}

export { init, track }
