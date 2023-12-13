import type { Metadata } from "next"
import ContactContent from "@/app/(mainsite)/components/contactpage/ContactContent"

export const metadata: Metadata = {
    title: "Contact Us"
}

export default function ContactPage(){
    return(
        <>
            <ContactContent />
        </>
    )
}