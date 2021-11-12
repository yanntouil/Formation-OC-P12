import {createContext, useEffect, useState} from "react"


/**
 * @const {number} userId
 */
const userId = 18

/**
 * @const {string} apiUrl
 */
 const apiUrl = 'http://localhost:3010'

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

    useEffect(() => {
        // setTimeout(() => {// Sim request time

        // Get user from api
        fetch(`${apiUrl}/user/${userId}`)
            .then((response => response.json()))
            .then(data => setUser(data.data))
        // }, 1000)
    }, [])

    useEffect(() => {
        if (!user) return
        // setTimeout(() => {// Sim request time

        // Get activity from api
        fetch(`${apiUrl}/user/${user.id}/activity`)
        .then((response => response.json()))
        .then(data => setActivity(data.data.sessions))

        // Get average sessions from api
        fetch(`${apiUrl}/user/${user.id}/average-sessions`)
        .then((response => response.json()))
        .then(data => setAverageSessions(data.data.sessions))

        // Get performance from api
        fetch(`${apiUrl}/user/${user.id}/performance`)
        .then((response => response.json()))
        .then(data => {
            setPerformance(data.data.data)
            setPerformanceKind(data.data.kind)
        })

        // }, 3000)

    }, [user])

    return (
        <DashboardContext.Provider value={{user, activity, averageSessions, performance, performanceKind}}>
            {children}
        </DashboardContext.Provider>
    )
}