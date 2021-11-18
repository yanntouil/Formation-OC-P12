import React, { useContext } from 'react'
import { DashboardContext } from '../Context/DashboardContext';
//import {users, activities, averageSessions, performance as performances} from '../data'
import Stat from '../Components/Ui/Stat'
import Activity from '../Components/Ui/Activity';
import AverageSessions from '../Components/Ui/AverageSessions';
import Performance from '../Components/Ui/Performance';
import Score from '../Components/Ui/Score';
import Loader from '../Components/Ui/Loader';

/**
 *
 */
export default function Home() {
    const context = useContext(DashboardContext)
    const {user, activity, averageSessions, performance, performanceKind, apiError} = context

    return !apiError ? (
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
            })
        </section>
    ) : (
        <section className="connection-lost">
            <h1 className="connection-lost-title">Oups !</h1>
            <p className="connection-lost-secondary">
                La connexion avec notre serveur a été perdu, n'hésitez pas à verifier votre connexion internet et à rafraichir la page et si le problème persite merci de contacter un administrateur.
            </p>
            <div className="connection-lost-actions">
                <button 
                type="button" 
                className="connection-lost-button"
                onClick={(e) => window.location.reload()}
                >Rafraichir la page</button>
            </div>
        </section>
    )
}
