import { RegistrationForm } from "./logic/SignupFormLogic"
import { SignupRegistrationProps } from "./utils/interfaces"


export default function SignupForm() {
    const RegistrationData: SignupRegistrationProps = {
        title: "Register",
        description: "Register to proceed"
    }
    return (
        <section className="flex justify-center items-center min-h-full">
            <RegistrationForm props={RegistrationData}/>
        </section>
    )
}