export interface SignupRegistrationProps {
    disableSignupIfMalformed?: boolean
    showLoadingState?: boolean
    title?: string
    description?: string
    signupBtnTitle?: string
    requiredToReadTermsConditions?: boolean
    useTermsConditions?: boolean
    useSession?: boolean,
    session?: {
        key: string,
        expiry: number
    }
    showLogin?: boolean
    loginField?: {
        label?: string, 
        linkLabel?: string
        link: string
    }
    showGoBackLink?: boolean
    passwordChecks?: {
        specialChar?: boolean
        digit?: boolean
        lowerCase?: boolean
        upperCase?: boolean
        minLength?: number
    }
    usernameChecks?: {
        useDigit?: boolean
        useSpaces?: boolean
    }
    className?: {
        form?: string 
        title?: string 
        description?: string
        signupBtn?: string
        backLink?: string
    }
}

export interface SignupFormOnActionCallbackType { username:string, email:string, password:string}

export interface returnType { result: boolean, msg: string }

export interface checkboxProps { 
    timesRead: number, 
    setCheckState: React.Dispatch<React.SetStateAction<number>>,
    compulsoryRead?: boolean
}

export interface SVGProps {
    dimensions?: number,
    stroke?: string,
    fill?: string,
    strokeWidth?: number,
    className?: string,
}

export interface PasswordPreviewSyntaxType {
    password: string
    passwordChecks: {
        upperCase: boolean
        lowerCase: boolean
        digit: boolean
        special: boolean
        minLength: number
    }
}

export interface ToastType {
    title: string
    description: string 
    className: string 
    variant: 'default' | 'destructive'
}
