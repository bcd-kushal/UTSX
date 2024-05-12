"use client"
import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardTitle, CardHeader, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PasswordPreviewSyntaxType, SignupFormOnActionCallbackType, SignupRegistrationProps } from "../utils/interfaces"
import { isEmailAuthentic } from "./authenticEmail"
import { CheckboxComponent } from "./CheckboxTnC"
import { ArrowLeftIcon, ReloadIcon } from "../utils/svgs"
import { ShowPasswordSyntaxMessage } from "./ShowPasswordSyntaxMessage"
import { INVALID_MSG_COLOR, LINK_COLOR, VALID_MSG_COLOR } from "../constants/colors"
import { REGEX_FIELD_VALUE_TEST } from "../constants/regex"
import { DEFAULTS, TOAST_DEFAULT } from "../constants/defaults"

// ====[ REGISTRATION FORM ]====================================

export function RegistrationForm({ props, onAction }: { props?: SignupRegistrationProps, onAction: ({username, email, password}:SignupFormOnActionCallbackType)=>void }) {
    const { toast } = useToast()
    const router = useRouter()
    
    const [username, setUsername] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [loadingRegister, setLoadingRegister] = React.useState(false)
    const [newUser, setNewUser] = React.useState(false)
    const [formError, setFormError] = React.useState({ username: false, email: false, password: false })
    const [termsRead, setTermsRead] = React.useState(0)

    
    const formTitle                 = props?.title                           || DEFAULTS.title
    const formDescription           = props?.description                     || DEFAULTS.description
    const btnLabel                  = props?.signupBtnTitle                  || formTitle
    const alreadyUserLabel          = props?.loginField?.label               || DEFAULTS.loginField?.label
    const loginLinkLabel            = props?.loginField?.linkLabel           || DEFAULTS.loginField?.linkLabel
    const sessionExpiry             = props?.session?.expiry                 || DEFAULTS.session?.expiry  // ...
    const showLoading               = props?.showLoadingState                || DEFAULTS.showLoadingState
    const useSession                = props?.useSession                      || DEFAULTS.useSession
    const useTermsConditions        = props?.useTermsConditions              || DEFAULTS.useTermsConditions
    const sessionKey                = props?.session?.key                    || DEFAULTS.session?.key
    const showBackLink              = props?.showGoBackLink                  || DEFAULTS.showGoBackLink
    const showLogin                 = props?.showLogin                       || DEFAULTS.showLogin
    const loginLink                 = props?.loginField?.link                || DEFAULTS.loginField?.link
    const disableSignupIfMalformed  = props?.disableSignupIfMalformed        || DEFAULTS.disableSignupIfMalformed
    const compulsoryTCRead          = props?.requiredToReadTermsConditions   || DEFAULTS.requiredToReadTermsConditions


    const passwordCheck: PasswordPreviewSyntaxType['passwordChecks'] = {
        upperCase:  props?.passwordChecks?.upperCase     || DEFAULTS.passwordChecks?.upperCase,
        lowerCase:  props?.passwordChecks?.lowerCase     || DEFAULTS.passwordChecks?.lowerCase,
        digit:      props?.passwordChecks?.digit         || DEFAULTS.passwordChecks?.digit,
        special:    props?.passwordChecks?.specialChar   || DEFAULTS.passwordChecks?.specialChar,
        minLength:  props?.passwordChecks?.minLength     || DEFAULTS.passwordChecks?.minLength
    }

    const LOADING_OFFSET_TRIGGER_TIME = showLoading ? 250 : 0    // in ms 

    React.useEffect(() => {
        if (useSession && newUser) {
            sessionStorage.setItem(sessionKey,username)
            document.cookie = `${sessionKey}=${username}; expires=${sessionExpiry}; path=/`
        }
        return () => { }
    }, [newUser, username])

    const handleRegistration = async (formData: FormData) => {
        if(showLoading)
            setLoadingRegister(prev => true)

        setTimeout(() => {
            if (formError.email || formError.password || formError.username)
                toast({
                    title: TOAST_DEFAULT.title,
                    description: TOAST_DEFAULT.description,
                    className: TOAST_DEFAULT.className,
                    variant: TOAST_DEFAULT.variant
                })
            else {
                const credentials = { username: formData.get("register_name")! as string, email: formData.get("register_email")! as string, password: formData.get("register_password")! as string }
                onAction(credentials)
            }

            if(showLoading)
                setLoadingRegister(prev => false)

        }, LOADING_OFFSET_TRIGGER_TIME)
    }

    const errorFieldStyles = `text-xs ${INVALID_MSG_COLOR}`
    const loginLinkStyles = `text-[${LINK_COLOR}] hover:underline text-xs`

    return (
        <Card className={`max-w-screen w-fit h-fit justify-center py-10 md:py-6 flex flex-col gap-[15px] ${props?.className?.form}`} >
            <CardHeader className="px-10 md:px-6">
                {showBackLink ? <div className={`text-xs pb-5 w-fit text-[#888] hover:underline hover:cursor-pointer flex items-center gap-3 ${props?.className?.backLink}`} onClick={()=>router.replace('/')}><ArrowLeftIcon />Back</div> : <></>}
                <CardTitle className={`text-3xl  ${props?.className?.title}`}>{formTitle}</CardTitle>
                <CardDescription className={props?.className?.description}>{formDescription}</CardDescription>
            </CardHeader>
            <CardContent className="max-w-screen px-10 md:px-6 w-[480px] md:w-[320px]">
                <form action={handleRegistration}>
                    <div className="grid w-full items-center gap-3">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="my-1">Username <RequiredField /> </Label>
                            <Input id="register_name" name="register_name" type="text" placeholder="" onKeyUp={(e)=>setFormError(prev => ({ ...prev, username: (e.target as HTMLInputElement).value === "" ? false : !REGEX_FIELD_VALUE_TEST.NAME.test((e.target as HTMLInputElement).value) }))} />
                            <div className={errorFieldStyles}>{formError.username ? "Only alphabets, digits or underscores allowed" : ""}</div>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="my-1">Email address <RequiredField /> </Label>
                            <Input id="register_email" name="register_email" type="email" placeholder="" onKeyUp={(e)=>setFormError(prev => ({ ...prev, email: (e.target as HTMLInputElement).value === "" ? false : !REGEX_FIELD_VALUE_TEST.EMAIL.test((e.target as HTMLInputElement).value) }))} />
                            <div className={errorFieldStyles}>{formError.email ? "Email address is malformed" : ""}</div>
                        </div>
                        <div className="flex flex-col space-y-1.5 mt-1">
                            <Label htmlFor="framework" className="my-1">Password <RequiredField /> </Label>
                            <Input id="password" name="register_password" type="password" placeholder="" onKeyUp={(e)=>{setFormError(prev => ({ ...prev, password: (e.target as HTMLInputElement).value === "" ? false : !REGEX_FIELD_VALUE_TEST.PASSWORD.test((e.target as HTMLInputElement).value) }));setPassword(prev=>(e.target as HTMLInputElement).value)}} />
                            <div className={"text-xs"}>{password.length > 0 ? <ShowPasswordSyntaxMessage password={password} passwordChecks={passwordCheck} /> : ""}
                            </div>
                        </div>
                        {useTermsConditions ? <div className="flex flex-col space-y-1.5 mt-1"><CheckboxComponent timesRead={termsRead} setCheckState={setTermsRead} compulsoryRead={compulsoryTCRead}/></div> : <></>}
                    </div>
                    <CardFooter className="flex justify-between px-0 mt-8 pb-2 items-center">
                        <Button type="submit" className={`mt-8 ${props?.className?.signupBtn}`} disabled={(disableSignupIfMalformed ? (formError.username||formError.password||formError.email) || !(username.length>0 && password.length>0 && email.length>0) : compulsoryTCRead) && (useTermsConditions && !Boolean(termsRead!==0 && (compulsoryTCRead? termsRead%2===0 : termsRead%2!==0 )) || Boolean(loadingRegister))}><ReloadIcon className={showLoading && loadingRegister ? "mr-2 h-4 w-4 animate-spin" : "hidden"} />{btnLabel}</Button>
                        <CardDescription className="text-xs mt-8">{showLogin ? <>{alreadyUserLabel} <Link href={loginLink} className={loginLinkStyles}>{loginLinkLabel}</Link></> : <>&nbsp;</>}</CardDescription>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    )
}


const RequiredField = () => {
    return (
        <span className="text-xs text-red-300 hidden">*</span>
    )
}