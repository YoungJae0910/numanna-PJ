import { getUser } from "../api/authApi"

export const getTotalScoreDifferenceBetweenTwoUsers = async (
    firstUserId: string,
    secondUserId: string
) => {
    const firstUser = await getUser(firstUserId)
    const secondUser = await getUser(secondUserId)
    if (!firstUser || !secondUser) return

    const firstUserPersonality = firstUser.personalityType
    const secondUserPersonality = secondUser.personalityType

    const extroversionScoreDiff =
        secondUserPersonality.extroversionScore -
        firstUserPersonality.extroversionScore
    const smokingScoreDiff =
        secondUserPersonality.smokingScore - firstUserPersonality.smokingScore
    const alcoholScoreDiff =
        secondUserPersonality.alcoholScore - firstUserPersonality.alcoholScore

    return extroversionScoreDiff + smokingScoreDiff + alcoholScoreDiff
}

export const getExtroversionScoreDifferenceBetweenTwoUsers = async (
    firstUserId: string,
    secondUserId: string
) => {
    const firstUser = await getUser(firstUserId)
    const secondUser = await getUser(secondUserId)
    if (!firstUser || !secondUser) return

    const firstUserPersonality = firstUser.personalityType
    const secondUserPersonality = secondUser.personalityType

    const extroversionScoreDiff =
        secondUserPersonality.extroversionScore -
        firstUserPersonality.extroversionScore

    return extroversionScoreDiff
}

export const getSmokingScoreDifferenceBetweenTwoUsers = async (
    firstUserId: string,
    secondUserId: string
) => {
    const firstUser = await getUser(firstUserId)
    const secondUser = await getUser(secondUserId)
    if (!firstUser || !secondUser) return

    const firstUserPersonality = firstUser.personalityType
    const secondUserPersonality = secondUser.personalityType

    const smokingScoreDiff =
        secondUserPersonality.smokingScore - firstUserPersonality.smokingScore

    return smokingScoreDiff
}

export const getAlcoholScoreDifferenceBetweenTwoUsers = async (
    firstUserId: string,
    secondUserId: string
) => {
    const firstUser = await getUser(firstUserId)
    const secondUser = await getUser(secondUserId)
    if (!firstUser || !secondUser) return

    const firstUserPersonality = firstUser.personalityType
    const secondUserPersonality = secondUser.personalityType

    const alcoholScoreDiff =
        secondUserPersonality.alcoholScore - firstUserPersonality.alcoholScore

    return alcoholScoreDiff
}

export const canBeMatched = async (
    firstUserId: string,
    secondUserId: string
) => {
    const firstUser = await getUser(firstUserId)
    const secondUser = await getUser(secondUserId)

    if (!firstUser || !secondUser) return false
    if (firstUser.sex !== secondUser.partnerSex) return false
    if (secondUser.sex !== firstUser.partnerSex) return false

    return true
}
