import { Race } from "@/types/raceTypes"
import "@/raceCard.css"
import FlagIcon from "./flagIcon"
import { countryCodes } from "@/utilities/countryCodes"
import { isSprintWeekend } from "@/utilities/raceUtils"
import Link from "next/link"

export function RaceCard({ params }: {
    params: Race
}) {

    const raceInfo: Race = params
    const sprintWeeked: boolean = isSprintWeekend(raceInfo)

    if (!sprintWeeked) {
        return (

            <Link href="/details" className="race-card">

                <div className="flex justify-center p-2">{raceInfo.raceName}</div>
                <div className="flex justify-center"><FlagIcon countryCode={countryCodes[raceInfo.Circuit.Location.country]} /></div>
                <div className="flex justify-center p-2">
                    {(() => {
                        const [y1, m1, d1] = raceInfo.FirstPractice.date.split('-').map(Number);
                        const [y2, m2, d2] = raceInfo.date.split('-').map(Number);
                        return `${new Date(Date.UTC(y1, m1 - 1, d1)).toLocaleDateString('en-US', { timeZone: 'UTC' })} - 
            ${new Date(Date.UTC(y2, m2 - 1, d2)).toLocaleDateString('en-US', { timeZone: 'UTC' })}`;
                    })()}
                </div>

                <div className="justify-items-center mt-2 text-sm w-full">
                <div className="flex w-full justify-between items-center px-4">
                    <span className="font-semibold whitespace-nowrap">Practice 1:</span>
                    <span className="text-right">{new Date(raceInfo.FirstPractice.date + 'T' + raceInfo.FirstPractice.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
                </div>
                <div className="flex w-full justify-between items-center px-4 border-t-1">
                    <span className="font-semibold whitespace-nowrap">Practice 2:</span>
                    <span className="text-right">{new Date(raceInfo.SecondPractice!.date + 'T' + raceInfo.SecondPractice!.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
                </div>
                <div className="flex w-full justify-between items-center px-4 border-t-1">
                    <span className="font-semibold whitespace-nowrap">Practice 3:</span>
                    <span className="text-right">{new Date(raceInfo.ThirdPractice!.date + 'T' + raceInfo.ThirdPractice!.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
                </div>
                <div className="flex w-full justify-between items-center px-4 border-t-1">
                    <span className="font-semibold whitespace-nowrap">Qualifying:</span>
                    <span className="text-right">{new Date(raceInfo.Qualifying.date + 'T' + raceInfo.Qualifying.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
                </div>
                <div className="flex w-full justify-between items-center px-4 border-t-1">
                    <span className="font-semibold">Race:</span>
                    <span className="ml-2">{new Date(raceInfo.date + 'T' + raceInfo.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
                </div>
            </div>
            </Link>

        )
    }

    return (

        <Link href="/details" className="race-card">
            <div className="flex justify-center p-2">{raceInfo.raceName}</div>
            <div className="flex justify-center"><FlagIcon countryCode={countryCodes[raceInfo.Circuit.Location.country]} /></div>
            <div className="flex justify-center p-2">
                {(() => {
                    const [y1, m1, d1] = raceInfo.FirstPractice.date.split('-').map(Number);
                    const [y2, m2, d2] = raceInfo.date.split('-').map(Number);
                    return `${new Date(Date.UTC(y1, m1 - 1, d1)).toLocaleDateString('en-US', { timeZone: 'UTC' })} - 
        ${new Date(Date.UTC(y2, m2 - 1, d2)).toLocaleDateString('en-US', { timeZone: 'UTC' })}`;
                })()}
            </div>

            <div className="justify-items-center mt-2 text-sm w-full">
                <div className="flex w-full justify-between items-center px-4">
                    <span className="font-semibold whitespace-nowrap">Practice:</span>
                    <span className="text-right">{new Date(raceInfo.FirstPractice.date + 'T' + raceInfo.FirstPractice.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
                </div>
                <div className="flex w-full justify-between items-center px-4 border-t-1">
                    <span className="font-semibold whitespace-nowrap">Sprint Qualifying:</span>
                    <span className="text-right">{new Date(raceInfo.SprintQualifying!.date + 'T' + raceInfo.SprintQualifying!.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
                </div>
                <div className="flex w-full justify-between items-center px-4 border-t-1">
                    <span className="font-semibold whitespace-nowrap">Sprint Race:</span>
                    <span className="text-right">{new Date(raceInfo.Sprint!.date + 'T' + raceInfo.Sprint!.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
                </div>
                <div className="flex w-full justify-between items-center px-4 border-t-1">
                    <span className="font-semibold whitespace-nowrap">Qualifying:</span>
                    <span className="text-right">{new Date(raceInfo.Qualifying.date + 'T' + raceInfo.Qualifying.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
                </div>
                <div className="flex w-full justify-between items-center px-4 border-t-1">
                    <span className="font-semibold">Race:</span>
                    <span className="ml-2">{new Date(raceInfo.date + 'T' + raceInfo.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</span>
                </div>
            </div>
        </Link>

    )

}