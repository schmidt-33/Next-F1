import { Race } from "@/types/raceTypes"
import "@/raceCard.css"
import FlagIcon from "./flagIcon"

export function RaceCard({ params }: {
    params: Race
}) {

    const raceInfo: Race = params
    return (
        <div className="race-card">
            <div className="flex justify-center p-2">{raceInfo.raceName}</div>
            <div className="flex justify-center"><FlagIcon countryCode="au"/></div>
            <div className="flex justify-center">
                {(() => {
                    const [y1, m1, d1] = raceInfo.FirstPractice.date.split('-').map(Number);
                    const [y2, m2, d2] = raceInfo.date.split('-').map(Number);
                    return `${new Date(Date.UTC(y1, m1 - 1, d1)).toLocaleDateString('en-US', { timeZone: 'UTC' })} - 
            ${new Date(Date.UTC(y2, m2 - 1, d2)).toLocaleDateString('en-US', { timeZone: 'UTC' })}`;
                })()}
            </div>


            <div className="flex justify-center gap-2 mt-2">
                <div className="session-name">FP1 <span>{new Date(raceInfo.FirstPractice.date + 'T' + raceInfo.FirstPractice.time).toLocaleTimeString()}</span></div>
                <div className="session-name">FP2</div>
                <div className="session-name">FP3</div>
                <div className="session-name">Q <span>{new Date(raceInfo.Qualifying.date + 'T' + raceInfo.Qualifying.time).toLocaleTimeString()}</span></div>
                <div className="session-name">R <span>{new Date(raceInfo.date + 'T' + raceInfo.time).toLocaleTimeString()}</span></div>
            </div>
        </div>
    )
}