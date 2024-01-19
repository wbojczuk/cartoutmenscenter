import type { Metadata } from "next"
import ApplicationContent from "@/app/(mainsite)/components/applicationpage/ApplicationContent/ApplicationContent"

export const metadata: Metadata = {
    title: "Application"
}

export default function ApplicationPage(){
    return(
        <ApplicationContent />
    )
}