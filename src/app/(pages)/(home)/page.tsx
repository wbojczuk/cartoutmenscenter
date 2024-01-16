import Header from "@/app/(mainsite)/components/homepage/Header/Header"
import OurMission from "@/app/(mainsite)/components/homepage/OurMission/OurMission"
import Support from "@/app/(mainsite)/components/homepage/Support/Support"
import MediaCoverage from "@/app/(mainsite)/components/homepage/MediaCoverage/MediaCoverage"
import ComingSoon from "@/app/(mainsite)/components/homepage/ComingSoon/ComingSoon"

export default function Home() {
  return (
    <>
      <Header />
      <ComingSoon />
      <OurMission />
      <Support />
      <MediaCoverage />
    </>
  )
}
