export interface SignupRegistrationProps {
    title?: string,
    desc?: string,
    cph?: string, cpw?: string,
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