import { RegistrationForm } from "./logic/SignupFormLogic"


export default function SignupForm() {

    return (
        <section className="flex justify-center px-[24px] items-center min-h-[calc(100vh-118px)] md:min-h-[calc(100vh-138px)] md:px-[30px] md:mt-[30px]">
            <RegistrationForm />
        </section>
    )
}