export const SERVER_URL = "https://numanna-server.herokuapp.com/"

export const getUsersUrl = () => {
    return SERVER_URL + "/users"
}

export const getMessagesUrl = () => {
    return SERVER_URL + "/messages"
}

export const getPersonalitySurveyQuestions = () => {
    return SERVER_URL + "/personalitySurveyQuestions"
}
