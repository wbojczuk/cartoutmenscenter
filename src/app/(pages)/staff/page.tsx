import type { Metadata } from "next"
import TeamMembers from "@/app/(mainsite)/components/staffpage/TeamMembers/TeamMembers"

export const metadata: Metadata = {
    title: "Leadership"
}

export default function StaffPage(){
    return(
        <>
            <TeamMembers />
        </>
    )
}