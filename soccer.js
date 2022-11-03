
const RESULT_VALUES = {
  w: 3,
  d: 1,
  l: 0
}

/**
 * Takes a single result string and (one of 'w', 'l', or 'd')
 * and returns the point value
 *
 * @param {string} result
 * @returns {number} point value
 */
const getPointsFromResult = function getPointsFromResult(result) {
  return RESULT_VALUES[result];
}

// Create getTotalPoints function which accepts a string of results
// including wins, draws, and losses i.e. 'wwdlw'
// Returns total number of points won

const getTotalPoints = results => {
  let gameResult, gamePoints
  let totalPoints = 0

  // For each character in the results string, add the number of points to the total
  for (var i = 0; i < results.length; i++) {
    gameResult = results.charAt(i)
    gamePoints = getPointsFromResult(gameResult)
    totalPoints += gamePoints
  }

  return totalPoints
}

// Check getTotalPoints
console.log(getTotalPoints('wwdl')); // should equal 7

// create orderTeams function that accepts as many team objects as desired,
// each argument is a team object in the format { name, results }
// i.e. {name: 'Sounders', results: 'wwlwdd'}
// Logs each entry to the console as "Team name: points"

// The only parameter of this function is teamList, an array of objects.
const orderTeams = (...teamList) => {
  let teamPoints

  // Each team is an object with "name" and "results" properties
  teamList.forEach(team => {

    // Convert the results string into their points
    teamPoints = getTotalPoints(team.results)

    // Console log the team's name and points.
    console.log(`${team.name}: ${teamPoints}`)
  })

}

// Check orderTeams
orderTeams(
  { name: 'Sounders', results: 'wwdl' },
  { name: 'Galaxy', results: 'wlld' }
);
// should log the following to the console:
// Sounders: 7
// Galaxy: 4
