export interface SignupRegistrationProps {
    title?: string
    description?: string
    requiredToReadTermsConditions?: true
    useTermsConditions?: true
    useSession?: true,
    session?: {
        key: string,
        expiry: number
    }
    showLogin?: true
    loginField?: {
        label?: string,
        linkLabel?: string
    }
}

export interface returnType { result: boolean, msg: string }

export interface checkboxProps { checkState: boolean, setCheckState: React.Dispatch<React.SetStateAction<boolean>> }

export interface SVGProps {
    dimensions?: number,
    stroke?: string,
    fill?: string,
    strokeWidth?: number,
    className?: string,
}