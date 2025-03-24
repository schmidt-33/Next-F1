import { Race } from "@/types/raceTypes";

export const isSprintWeekend = (race: Race): boolean => {
    if(race.Sprint)
        return true
    return false
}