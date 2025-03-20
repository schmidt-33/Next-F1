import "@/raceCard.css"

export function RaceCard() {

    return (
        <div className="race-card">
            <div>RaceName</div>
            <div className="flex justify-center gap-2 mt-2">
                <div className="session-name">FP1</div>
                <div className="session-name">FP2</div>
                <div className="session-name">FP3</div>
                <div className="session-name">Q</div>
                <div className="session-name">R</div>
            </div>
        </div>

    )
}