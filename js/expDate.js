'use strict'
const expDate = (time, logging = false) => {

  //Initial Processing
  if (logging) console.log('Input:', time)// Log "time" Parameter
  time = time.toLowerCase()// All Lower Case Characters
  const units = time.split(/[0-9 ]/).filter(a1 => a1 !== '')// Store Letters From "time" parameter
  const nums = time.split(/[A-z ]/).filter(a1 => a1 !== '')// Store Numbers From "time" parameter
  let date = new Date(time)// New Date

  //Date Output Function
  const dateOutput = (// Function Outputting Date
    d1 = date.toDateString(),// Weekday, Month, Day Of Month, Year
    h1 = date.getHours(),// Hours
    m1 = date.getMinutes(),// Minutes
    s1 = date.getSeconds(),// Seconds
    func = (unit) => unit.toString().length < 2 ? '0' + unit : unit, // Adds zero in front of single digit numbers (Hours, Minutes, Seconds)
  ) => `${d1} ${func(h1)}:${func(m1)}:${func(s1)}`

  //Units Of Time Symbols
  const timeUnits = [// Substrings to match in the "units" variable
    ['years', 'year', 'y'],
    ['months', 'month', 'mon', 'mons'],
    ['days', 'day', 'd'],
    ['hours', 'hour', 'h'],
    ['minutes', 'minute', 'min', 'mins'],
    ['seconds', 'second', 'sec', 'secs', 's'],
  ]

  //Time Count Conversion Table
  const conversions = {// To multiply "nums" array values with the aligning "units" array values that match the property names 
    years:   1000 * 60 * 60 * 24 * 365,
    months:  1000 * 60 * 60 * 24 * 30,
    days:    1000 * 60 * 60 * 24,
    hours:   1000 * 60 * 60,
    minutes: 1000 * 60,
    seconds: 1000,
  }

  //Boolean Indicating if "time" parameter includes any acceptable units of measure symbols
  const hasTimeUnits = timeUnits.some(a1 =>//Iterates through "timeUnits" array of arrays
    a1.some(a2 =>//Iterates through nested array
      units.includes(a2)//Checks if "units" array has acceptable units of measure symbols
    ) 
  )

  // Outputs Specified Date
  if (date.toString() !== 'Invalid Date') {// If "time" parameter is not an invalid date
    if (logging) console.log('Output:', dateOutput())// Log Output
    return dateOutput()// Return Date
  }

  // Outputs Date Adding Time To Current Date 
  else if (hasTimeUnits) {
    date = new Date()// Resets date to current date

    //Converts All Time Counts To Seconds
    for (let i1 = 0, len = units.length; i1 < len; i1++)// Iterates through "units" array
      for (let i2 = 0, len = timeUnits.length; i2 < len; i2++)// Iterates through "timeUnits" array
        if (timeUnits[i2].includes(units[i1])) {// If "time" substring has unit of time
          units[i1] = timeUnits[i2][0]// Change "units" iteration value to access property value
          nums[i1] *= conversions[units[i1]]// Use property value to use correct conversion and multiply the current "nums" iteration value
        }

    //Sets & Returns Date Based On Seconds
    if (logging) console.log('Before Set Expiry:', dateOutput())//Log date before set date
    const expire = date.getTime() + nums.reduce((a,b) => a + b)//Add all the conversions together
    date.setTime(expire)//Use sum of conversions to set date
    if (logging) console.log('After Set Expiry:', dateOutput())//Log date after set date
    return date.getTime()
//    return `${date.toDateString()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`//return set date
  }
  else if (logging) {//Logs Errors
    console.error(time)//Logs Input
    console.error(date)//Logs Output Of Date Constructor
  }
}
