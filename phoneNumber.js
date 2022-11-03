// Create a function testPhoneNumber
// takes in a phoneNumber string in one of these formats:
// '(206) 333-4444'
// '206-333-4444'
// '206 333 4444'
// Returns true if valid, false if not valid

const testPhoneNumber = testStr => {

  //Acceptable formats
  const acceptableFormat = /^\(\d{3}\)[-\s]\d{3}[-\s]\d{4}$/

  // Test the input against the acceptable format
  if (acceptableFormat.test(testStr)) {
    return true
  }

  // If you're still here, you're not a legit phone number
  return false
}

// Explanation of RegExp
// ^      start of line
// \(     optional start parenthesis
// \d{3}  exactly 3 digit characters
// \)     optional end parenthesis
// [-\s]  one of a space or a dash
// \d{3}  exactly 3 digit characters
// [-\s]  one of a space or a dash
// \d{4}  exactly 4 digit characters
// $      end of line

// check testPhoneNumber
console.log(testPhoneNumber('(206) 333-4444')); // should return true
console.log(testPhoneNumber('(206) 33-4444')); // should return false, missing a digit


// 1. Create a function parsePhoneNumber that takes in a phoneNumber string
// in one of the above formats.  For this, you can *assume the phone number
// passed in is correct*.  This should use a regular expression
// and run the exec method to capture the area code and remaining part of
// the phone number.
// Returns an object in the format {areaCode, phoneNumber}

const parsePhoneNumber = phoneNumber => {

  let areaCode
  const parenthesis = /^[(]\d{3}[)]/

  // If the input number begins with a parenthesis,
  if (parenthesis.exec(phoneNumber)) {
    // the area code is in chars 1,2, and 3,
    areaCode = phoneNumber.slice(1, 4)
  } else { // Else if the input number does not begin with a parenthesis,
    // the area code is in chars 0, 1, 2,
    areaCode = phoneNumber.slice(0, 3)
  }

  let digits
  const spaceOrDash = /[-\s]/g

  // BUG:
  // After running .exec on phoneNumber, spaceOrDash.lastIndex should be at the first digit after the area code. Instead it's at 0. -_-
  // This is the reference I'm using for my solution: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
  // Update: The regular expression needed to be "global". Will ask Voit.

  // Get the last seven digits of the phone number
  let separators = spaceOrDash.exec(phoneNumber)
  let digitsStr = phoneNumber.slice(spaceOrDash.lastIndex)
  //console.log(`Space or dash (${separators[0]}) ending at index ${spaceOrDash.lastIndex}.`)

  // Remove the separator character
  digits = digitsStr.replace(spaceOrDash, '')

  return {
    areaCode: areaCode,
    phoneNumber: digits
  }
}


/*
// Solution without as much use of .exec()
const parsePhoneNumber = phoneNumber => {

  const parenthesis = /^[(]/
  let areaCodeStart = 0
  let digitsStart = 4

  // If the input number begins with a parenthesis, we shift the start of the index
  if(parenthesis.exec(phoneNumber)) {
    areaCodeStart++
    digitsStart += 2
  }

  const areaCode = phoneNumber.slice(areaCodeStart, areaCodeStart+3)
  const digits = phoneNumber.slice(digitsStart)

  return {areaCode: areaCode, phoneNumber: digits}
}
*/


// Check parsePhoneNumber
console.log(parsePhoneNumber('206-333-4444'));
// returns {areaCode: '206', phoneNumber: '3334444'}

console.log(parsePhoneNumber('(222) 422-5353'));
// returns {areaCode: '222', phoneNumber: '4225353'}
