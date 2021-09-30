export function validateName (message){
    return function (rule,value, callback){
        const namePattern = /^[A-Za-zÑñÁáÉéÍíÓóÚúÄäËëÏïÖöüÜ\s]+$/g
        if (!namePattern.test(value)) {
            callback(message)
            return
        }
        callback()
    }
}
export function validateNameLength (message){
    return function (rule,value, callback){
        const namePattern = /.{2,}/
        if (!namePattern.test(value)) {
            callback(message)
            return
        }
        callback()
    }
}