import type { Metadata } from "next"
import ProgramInfo from "@/app/(mainsite)/components/programpage/ProgramInfo/ProgramInfo"

export const metadata: Metadata = {
    title: "Our Program"
}

export default function ProgramPage(){
    return(
        <>
            <ProgramInfo />
        </>
    )
}