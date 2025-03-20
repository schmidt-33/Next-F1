import { RaceCard } from "@/components/raceCard";
import races from "@/mockData/mockRaces.json"
import * as raceTypes from "@/types/raceTypes"

export default function RacePage() {

    const raceList: raceTypes.RaceTable = races.MRData.RaceTable

    return (
        <div className="race-container">
            {raceList.Races.map((race) => (
                <RaceCard key={race.round} params={race}/>
            ))}
        </div>
    )
}