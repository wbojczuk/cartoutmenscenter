import Header from "@/app/(mainsite)/components/homepage/Header/Header"
import OurMission from "@/app/(mainsite)/components/homepage/OurMission/OurMission"
import Support from "@/app/(mainsite)/components/homepage/Support/Support"
import MediaCoverage from "@/app/(mainsite)/components/homepage/MediaCoverage/MediaCoverage"
import ComingSoon from "@/app/(mainsite)/components/homepage/ComingSoon/ComingSoon"
import ComeSupport from "@/app/(mainsite)/components/homepage/ComeSupport/ComeSupport"
import Chamber from "@/app/(mainsite)/components/homepage/Chamber/Chamber"
import Photo from "@/app/(mainsite)/components/homepage/Photo/Photo"

export default function Home() {
  return (
    <>
      <Header />
      <ComeSupport />
      <Chamber />
      <Photo />
      
      <Chamber />
      <Photo />
      {/* <ComeSupport /> */}
      <OurMission />
      <Support />
      <MediaCoverage />
    </>
  )
}
