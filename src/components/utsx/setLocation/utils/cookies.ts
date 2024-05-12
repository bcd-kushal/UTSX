'use server'
import { cookies } from "next/headers"


export const setCookie = async({ key, value }:{ key:string, value:string }) => {
    try { cookies().set(key,value) }
    catch(err) {}
}

export const getCookie = async ({ key }:{ key:string }) => {
    try {
        if(cookies().has(key))
            return cookies().get(key)?.value
        else {
            await setCookie({ key:key, value:"" })
            return ""
        }
    }
    catch(err) {
        await setCookie({ key:key, value:"" })
        return ""
    }
}