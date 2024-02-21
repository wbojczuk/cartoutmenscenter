import type { Metadata } from "next"
import HandbookContent from "@/app/(mainsite)/components/handbookpage/HandbookContent"

export const metadata: Metadata = {
    title: "Handbook"
}

export default function ApplicationPage(){
    return(
        <HandbookContent />
    )
}