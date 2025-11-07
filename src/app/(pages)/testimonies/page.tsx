import Testimonies from "@/app/(mainsite)/components/testimoniespage/Testimonies/Testimonies"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Graduates Testimonies"
}

export default function TestimoniesPage(){
    return(
        <>
            <Testimonies />
        </>
    )
}