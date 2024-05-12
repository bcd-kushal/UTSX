'use server'
import { RegistrationForm } from "./logic/SignupFormLogic"
import { SignupRegistrationProps } from "./utils/interfaces"


export default async function SignupForm({ props }: { props?: SignupRegistrationProps }) {
    return (
        <section className="flex justify-center items-center min-h-full">
            <RegistrationForm props={props}/>
        </section>
    )
}