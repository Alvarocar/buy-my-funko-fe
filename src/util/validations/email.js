export function isValidEmail(message){
    return function (rule, value, callback) {
      const emailPattern = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
      if (!emailPattern.test(value)) {
        callback(message)
        return
      }
      callback()
    }
  }