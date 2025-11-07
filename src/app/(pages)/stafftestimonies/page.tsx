import StaffTestimonies from "@/app/(mainsite)/components/testimoniespage/StaffTestimonies/StaffTestimonies"
import Testimonies from "@/app/(mainsite)/components/testimoniespage/Testimonies/Testimonies"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Staff Testimonies"
}

export default function StaffTestimoniesPage(){
    return(
        <>
            <StaffTestimonies />
        </>
    )
}