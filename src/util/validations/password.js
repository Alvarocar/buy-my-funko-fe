export function validateLowercase(message){
  return function (rule, value, callback){
    const passwo = /[a-z]/
    if (!passwo.test(value)) {
      callback(message)
      return
    }
    callback()
  }
}
export function validateUppercase(message){
  return function(rule, value, callback){
    const passwo = /[A-Z]/
    if (!passwo.test(value)) {
      callback(message)      
      return
    }
    callback()
  }
}
export function validatenumber(message){
  return function (rule, value, callback) {
    const passwo = /[0-9]/
    if (!passwo.test(value)) {
      callback(message)
      return
    }
    callback()
  }
}
export function validateSpecialchar(message) {
  return function (rule, value, callback) {
    const pattern = /[^a-z0-9]/i
    if (!pattern.test(value)) {
      callback(message)
      return
    }
    callback()
  }
}
export function ValidateLength(message){
  return function (rule, value, callback) {
    const passwo = /.{8,}/
    if (!passwo.test(value)) {
      callback(message)
      return
    }
    callback()
  }
}
