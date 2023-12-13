"use client"
// import PhoneNumber from "./PhoneNumber/PhoneNumber"
import { InlineIcon } from "@iconify/react"
import Image from "next/image"
import { useRef, useState } from "react"
import handleFormSubmit from "./handleFormSubmit"
import "./freeestimateform.css"
import MessageStatus from "../MessageStatus/MessageStatus"

export default function FreeEstimateForm() {

    const [status, setStatus] = useState("none")
    const formRef: any = useRef();


  return (
    <>
    <MessageStatus status={status} setStatus={setStatus}/>
    <form ref={formRef} id="estimateForm" onSubmit={(evt)=>{handleFormSubmit(evt, setStatus, formRef)}}>
    <input type="hidden" name="_subject" value="New message from website"/>
    <input type="hidden" name="_captcha" value="false"/>

            
            <div className="input-wrapper">
                <Image width={200} height={200} id="formPersonIcon" src={"/icons/person.svg"} alt="Person Icon" />
                <input required type="text" name="name" id="nameInput" placeholder={"Name"} />
            </div>
            
            <div className="input-wrapper">
                <Image width={200} height={200} id="formPhoneIcon" src={"/icons/phone.svg"} alt="Phone Icon" />
                <input required type="text" name="phoneNumber" id="phoneNumberInput" placeholder={"Phone Number"} />
            </div>
            <div className="input-wrapper">
                <Image width={200} height={200} id="formEmailIcon" src={"/icons/email.svg"} alt="Email Icon" />
                <input required type="email" name="email" id="emailInput" placeholder={"Email Address"} />
            </div>

            <div className="input-wrapper">
                <textarea required maxLength={2000} name="message" id="messageInput" placeholder={"Your Message"}></textarea>
            </div>
            
            <div className="center">
                <a onClick={(evt)=>{evt.preventDefault(); formRef.current.requestSubmit();}} className="main-cta" id="estimateFormSubmit" type="submit">Send Message <InlineIcon icon="basil:arrow-right-outline"/>
                </a>
            </div>
            
            <div className="form-decoration top-left"></div>
            <div className="form-decoration top-right"></div>
            <div className="form-decoration bottom-left"></div>
            <div className="form-decoration bottom-right"></div>
        </form>
    </>
  )
}
