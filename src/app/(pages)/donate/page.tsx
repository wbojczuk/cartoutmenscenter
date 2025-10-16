import Support from "@/app/(mainsite)/components/homepage/Support/Support"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Donate | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Donate | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function DonatePage(){
	 return(
	 	 <>
			<Support />
	 	 </>
	 )
}