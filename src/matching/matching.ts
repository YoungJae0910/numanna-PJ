// import { getUser } from "../api/authApi.ts"

// export const getTotalScoreDifferenceBetweenTwoUsers = async (
//     firstUserId: string,
//     secondUserId: string
// ) => {
//     const firstUser = await getUser(firstUserId)
//     const secondUser = await getUser(secondUserId)
//     if (!firstUser || !secondUser) return

//     const firstUserPersonality = firstUser.personalityType
//     const secondUserPersonality = secondUser.personalityType

//     const extroversionScoreDiff =
//         secondUserPersonality.extroversionScore -
//         firstUserPersonality.extroversionScore
//     const smokingScoreDiff =
//         secondUserPersonality.smokingScore - firstUserPersonality.smokingScore
//     const alcoholScoreDiff =
//         secondUserPersonality.alcoholScore - firstUserPersonality.alcoholScore

//     return extroversionScoreDiff + smokingScoreDiff + alcoholScoreDiff
// }

// export const getExtroversionScoreDifferenceBetweenTwoUsers = async (
//     firstUserId: string,
//     secondUserId: string
// ) => {
//     const firstUser = await getUser(firstUserId)
//     const secondUser = await getUser(secondUserId)
//     if (!firstUser || !secondUser) return

//     const firstUserPersonality = firstUser.personalityType
//     const secondUserPersonality = secondUser.personalityType

//     const extroversionScoreDiff =
//         secondUserPersonality.extroversionScore -
//         firstUserPersonality.extroversionScore

//     return extroversionScoreDiff
// }

// export const getSmokingScoreDifferenceBetweenTwoUsers = async (
//     firstUserId: string,
//     secondUserId: string
// ) => {
//     const firstUser = await getUser(firstUserId)
//     const secondUser = await getUser(secondUserId)
//     if (!firstUser || !secondUser) return

//     const firstUserPersonality = firstUser.personalityType
//     const secondUserPersonality = secondUser.personalityType

//     const smokingScoreDiff =
//         secondUserPersonality.smokingScore - firstUserPersonality.smokingScore

//     return smokingScoreDiff
// }

// export const getAlcoholScoreDifferenceBetweenTwoUsers = async (
//     firstUserId: string,
//     secondUserId: string
// ) => {
//     const firstUser = await getUser(firstUserId)
//     const secondUser = await getUser(secondUserId)
//     if (!firstUser || !secondUser) return

//     const firstUserPersonality = firstUser.personalityType
//     const secondUserPersonality = secondUser.personalityType

//     const alcoholScoreDiff =
//         secondUserPersonality.alcoholScore - firstUserPersonality.alcoholScore

//     return alcoholScoreDiff
// }

// export const canBeMatched = async (
//     firstUserId: string,
//     secondUserId: string
// ) => {
//     const firstUser = await getUser(firstUserId)
//     const secondUser = await getUser(secondUserId)

//     if (!firstUser || !secondUser) return false
//     if (firstUser.sex !== secondUser.partnerSex) return false
//     if (secondUser.sex !== firstUser.partnerSex) return false

//     return true
// }

export const getScoreDiffInfoBetweenTwoUsers = (userOne, userTwo) => {
    const firstUserPersonality = userOne.personalityType
    const secondUserPersonality = userTwo.personalityType

    const alcoholScoreDiff = Math.abs(
        firstUserPersonality.AlcoholScore - secondUserPersonality.AlcoholScore
    )
    const smokingScoreDiff = Math.abs(
        firstUserPersonality.SmokingScore - secondUserPersonality.SmokingScore
    )
    const extroversionScoreDiff = Math.abs(
        firstUserPersonality.ExtroversionScore -
            secondUserPersonality.ExtroversionScore
    )

    if (alcoholScoreDiff <= smokingScoreDiff) {
        if (alcoholScoreDiff <= extroversionScoreDiff) {
            // Alcohol is smallest
            return `음주 성향이 비슷해요! 음주 점수가 ${alcoholScoreDiff}점 차이나요.`
        } else {
            // Extroversion is smallest
            return `외향성이 비슷해요! 외향성 점수가 ${extroversionScoreDiff}점 차이나요.`
        }
    } else {
        // Smoking is smallest-ish
        return `흡연 성향이 비슷해요! 흡연 점수가 ${smokingScoreDiff}점 차이나요.`
    }
}
