import {createContext, useEffect, useState} from "react"
import config from '../config'
import {usersMocked, activitiesMocked, averageSessionsMocked, performanceMocked} from '../dataMocked'

/**
 * @const {Number} currentUser
 * @const {String} apiUrl
 * @const {Boolean} mockData
 * @const {Number} simDataLoadingTime
 */
const {currentUser, apiUrl, mockData, simDataLoadingTime} = config

/**
 * Context
 */
export const DashboardContext = createContext()

/**
 * Context provider
 * @component
 * @param {Object} params
 * @param {JSX} params.children
 * @return {JSX} 
 */
export default function DashboardContextProvider({children}) {

    /**
     * State
     */
    const [user, setUser] = useState()
    const [activity, setActivity] = useState()
    const [averageSessions, setAverageSessions] = useState()
    const [performance, setPerformance] = useState()
    const [performanceKind, setPerformanceKind] = useState()
    const [apiError, setApiError] = useState(false)

    /**
     * Get user data
     */
    const getUser = () => {
        if (!mockData) fetch(`${apiUrl}/user/${currentUser}`)
            .then((response => response.json()))
            .then(data => setUser(data.data))
            .catch((error) => setApiError(true))
        else setUser(usersMocked.find((item) => item.id === currentUser))
    }

    useEffect(() => {
        if (simDataLoadingTime === 0) getUser()
        else setTimeout(getUser, simDataLoadingTime)
    }, [])

    /**
     * Get user activity data
     */
    const getUserActivity = () => {
        if (!mockData) fetch(`${apiUrl}/user/${user.id}/activity`)
            .then((response => response.json()))
            .then(data => setActivity(data.data.sessions))
            .catch((error) => setApiError(true))
        else setActivity(activitiesMocked.find((activity) => activity.userId === user.id).sessions)
    }

    /**
     * Get user average sessions data
     */
    const getUserAverageSessions = () => {
        if (!mockData) fetch(`${apiUrl}/user/${user.id}/average-sessions`)
            .then((response => response.json()))
            .then(data => setAverageSessions(data.data.sessions))
            .catch((error) => setApiError(true))
        else setAverageSessions(averageSessionsMocked.find((averageSessions) => averageSessions.userId === user.id).sessions)
    }

    /**
     * Get user performance data
     */
    const getUserPerformance = () => {
        if (!mockData) fetch(`${apiUrl}/user/${user.id}/performance`)
            .then((response => response.json()))
            .then(data => {
                setPerformance(data.data.data)
                setPerformanceKind(data.data.kind)
            })
            .catch((error) => setApiError(true))
        else {
            const performance = performanceMocked.find((performance) => performance.userId === user.id)
            setPerformance(performance.data)
            setPerformanceKind(performance.kind)
        }
    }

    useEffect(() => {
        if (!user) return
        const getUserData = () => {
            getUserActivity()
            getUserAverageSessions()
            getUserPerformance()
        }
        if (simDataLoadingTime === 0) getUserData()
        else setTimeout(getUserData, simDataLoadingTime)
    }, [user])

    return (
        <DashboardContext.Provider value={{user, activity, averageSessions, performance, performanceKind, apiError}}>
            {children}
        </DashboardContext.Provider>
    )
}