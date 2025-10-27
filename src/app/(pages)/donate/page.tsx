import Support from "@/app/(mainsite)/components/homepage/Support/Support"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Donate`,
	  description: `Donate`,
}

export default function DonatePage(){
	 return(
	 	 <>
			<Support />
	 	 </>
	 )
}