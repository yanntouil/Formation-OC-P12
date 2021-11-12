import React, { useContext } from 'react'
import { DashboardContext } from '../Context/DashboardContext';
//import {users, activities, averageSessions, performance as performances} from '../data'
import Stat from '../Components/Ui/Stat'
import Activity from '../Components/Ui/Activity';
import AverageSessions from '../Components/Ui/AverageSessions';
import Performance from '../Components/Ui/Performance';
import Score from '../Components/Ui/Score';
import Loader from '../Components/Ui/Loader';


export default function Home() {
    const context = useContext(DashboardContext)
    const {user, activity, averageSessions, performance, performanceKind} = context

    return (
        <section className="homepage">
            {user ? (
                <>
                    <header className="section-header">
                        <h1 className="section-title">Bonjour {user.userInfos.firstName}</h1>
                        <p className="section-secondary">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    </header>
                    <div className="homepage-grid">
                        <div className="chart-activity">
                            {activity ? <Activity data={activity} /> : <Loader />}
                        </div>
                        <div className="chart-average-sessions">
                            {averageSessions ? <AverageSessions data={averageSessions} /> : <Loader color="white" />}
                        </div>
                        <div className="chart-performance">
                            {performanceKind ? <Performance data={performance} kind={performanceKind} /> : <Loader />}
                        </div>
                        <div className="chart-score">
                            <Score data={user.score ? user.score : user.todayScore} />
                        </div>
                        <div className="stats">
                            {Object.keys(user.keyData).map((key) => (
                                <Stat type={key} value={user.keyData[key]} key={key} />
                            ))}
                        </div>
                    </div>
                </>
                ) : <Loader />
            }
        </section>
    )
}
