"use client"

import styles from "./teammembers.module.css"
import TeamMember from "./TeamMember"
import teamData from "@/app/(mainsite)/data/teamData"

export default function TeamMembers() {


    const teamMemberElems = teamData.map((data:any, i)=>{
        return <TeamMember key={i} {...data} />
    })


  return (
    <section className={`center ${styles.teamMembersSection}`}>
        
        <h1>Leadership</h1>

        <div className={styles.teamMembersWrapper}>
            {teamMemberElems}
        </div>  
    </section>
  )
}
