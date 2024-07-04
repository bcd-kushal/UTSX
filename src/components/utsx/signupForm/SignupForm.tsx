'use client'
import { RegistrationForm } from "./logic/SignupFormLogic"
import { SignupFormOnActionCallbackType, SignupRegistrationProps } from "./utils/interfaces"


export default function SignupForm({ props, onSubmit }: { props?: SignupRegistrationProps, onSubmit:({username, email, password}:SignupFormOnActionCallbackType)=>void }) {
    return (
        <section className="flex justify-center items-center min-h-full">
            <RegistrationForm props={props} onAction={onSubmit}/>
        </section>
    )
} 
