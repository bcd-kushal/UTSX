import { SignupRegistrationProps } from "../utils/interfaces";

export const DEFAULTS = {
    disableSignupIfMalformed: true,
    showLoadingState: true,
    title: "Signup",
    description: "Create an account to proceed",
    signupBtnTitle: "Signup",
    requiredToReadTermsConditions: true,
    useTermsConditions: true,
    useSession: true,
    session: {
        key: "__username__",
        expiry: 100_000,
    },
    showLogin: true,
    loginField: {
        label: "Have an account?",
        linkLabel: "Login",
        link: "#",
    },
    showGoBackLink: true,
    passwordChecks: {
        specialChar: true,
        digit: true,
        lowerCase: true,
        upperCase: true,
        minLength: 8,
    },
    usernameChecks: {
        useDigit: true,
        useSpaces: true,
    },
    className: {
        form: "" ,
        title: "" ,
        description: "",
        signupBtn: "",
        backLink: "",
    }
}