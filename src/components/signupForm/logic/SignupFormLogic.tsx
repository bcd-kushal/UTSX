"use client"
import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { Card, CardContent, CardDescription, CardTitle, CardHeader, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SignupRegistrationProps } from "../utils/interfaces"
import { isEmailAuthentic } from "./authenticEmail"
import { CheckboxComponent } from "./CheckboxTnC"
import { REGEX_TEST } from "../utils/regex"
import { ArrowLeftIcon, ReloadIcon } from "../utils/svgs"

// ====[ REGISTRATION FORM ]====================================

export function RegistrationForm({ props }: { props?: SignupRegistrationProps }) {
    const { toast } = useToast()
    const [loadingRegister, setLoadingRegister] = React.useState(false)
    const [newUser, setNewUser] = React.useState(false)
    const [username, setUsername] = React.useState("")
    const [formError, setFormError] = React.useState({ username: false, email: false, password: false })
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [termsAccepted, setTermsAccepted] = React.useState(false)
    React.useEffect(() => {
        if (newUser) {
            sessionStorage.setItem('__minify_username__', username)
            document.cookie = `__minify_username__=${username}; expires=Wed, 05 Mar 2024 00:00:00 UTC; path=/`
        }
        return () => { }
    }, [newUser, username])
    const router = useRouter()
    const handleRegistration = async (formData: FormData) => {
        setLoadingRegister(prev => true)
        setTimeout(() => {
            if (formError.email || formError.password || formError.username)
                toast({
                    title: "Incomplete",
                    description: "Fill registration form completely",
                    className: "px-[20px]",
                    variant: "destructive"
                })
            else {
                const credentials = { username: formData.get("register_name")!, email: formData.get("register_email")!, password: formData.get("register_password")! }
                // check creds match or not here...
                // if they dont, redirect to register page
                // if creds match go to dashboard
                const isEmailRegistered = isEmailAuthentic({email:email})
                if (!isEmailRegistered.result)
                    toast({
                        title: "This user exists",
                        description: isEmailRegistered.msg,
                        action: (<Link href="/signin"><ToastAction altText="Already registered account">Signin now</ToastAction></Link>),
                        className: "px-[20px]"
                    })
                else {
                    // save to session storage and as cookie
                    setUsername(prev => String(credentials.username))
                    setNewUser(prev => true)
                    // setTimeout(()=>router.push(`/home/${credentials.username}`),2000)
                }
            }
            setLoadingRegister(prev => false)
        }, 250)
    }
    return (
        <Card className={`max-w-screen w-fit h-fit mt-[112px] mb-8 md:my-[60px] py-[24px] flex flex-col gap-[15px]`} >
            <CardHeader className="px-10 md:px-6">
                <div className="text-xs pb-5 w-fit text-[#888] hover:underline hover:cursor-pointer flex items-center gap-3" onClick={()=>router.replace('/')}><ArrowLeftIcon />Back</div>
                <CardTitle className="text-3xl">Register</CardTitle>
                <CardDescription>Welcome to Minify!</CardDescription>
            </CardHeader>
            <CardContent className="max-w-screen px-10 md:px-6 w-[480px] md:w-[320px]">
                <form action={handleRegistration}>
                    <div className="grid w-full items-center gap-3">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="my-1">Username</Label>
                            <Input id="register_name" name="register_name" type="text" placeholder="" onKeyUp={(e)=>setFormError(prev => ({ ...prev, username: (e.target as HTMLInputElement).value === "" ? false : !REGEX_TEST.NAME.test((e.target as HTMLInputElement).value) }))} />
                            <div className="text-xs text-red-400">{formError.username ? "Only alphabets, digits or underscores allowed" : ""}</div>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name" className="my-1">Email address</Label>
                            <Input id="register_email" name="register_email" type="email" placeholder="" onKeyUp={(e)=>setFormError(prev => ({ ...prev, email: (e.target as HTMLInputElement).value === "" ? false : !REGEX_TEST.EMAIL.test((e.target as HTMLInputElement).value) }))} />
                            <div className="text-xs text-red-400">{formError.email ? "Email address is malformed" : ""}</div>
                        </div>
                        <div className="flex flex-col space-y-1.5 mt-1">
                            <Label htmlFor="framework" className="my-1">Password</Label>
                            <Input id="password" name="register_password" type="password" placeholder="" onKeyUp={(e)=>setFormError(prev => ({ ...prev, password: (e.target as HTMLInputElement).value === "" ? false : !REGEX_TEST.PASSWORD.test((e.target as HTMLInputElement).value) }))} />
                            <div className="text-xs text-red-400">{formError.password ? (<> Minimum length 8. Should contain atleast: <br/>
                                                                <span className={/[A-Z]/.test(password)?"text-green-800":""}>• atleast one upper-case letter</span> <br/>
                                                                <span className={/[a-z]/.test(password)?"text-green-800":""}>• atleast one lower-case letter</span> <br/>
                                                                <span className={/[0-9]/.test(password)?"text-green-800":""}>• atleast one digit(0-9)</span> <br/>
                                                                <span className={/[@#$%^&+=_]/.test(password)?"text-green-800":""}>• atleast one special character from @#$%^&+=_</span> </>) 
                                                        : ""}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-1.5 mt-1"><CheckboxComponent checkState={termsAccepted} setCheckState={setTermsAccepted} /></div>
                    </div>
                    <CardFooter className="flex justify-between px-0 mt-8 pb-2 items-center">
                        <Button type="submit" className="mt-8" disabled={!Boolean(termsAccepted) || Boolean(loadingRegister)}><ReloadIcon className={loadingRegister ? "mr-2 h-4 w-4 animate-spin" : "hidden"} />Register</Button>
                        <CardDescription className="text-xs mt-8">Already a user? <Link href="/signin" className="text-[#3b82f6] hover:underline text-xs">Signin</Link></CardDescription>
                    </CardFooter>
                </form>
            </CardContent>
        </Card>
    )
}

