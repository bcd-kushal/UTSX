import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { TermsConditionsDialogComponent } from "./TermsConditions"
import { checkboxProps } from "../utils/interfaces"

export function CheckboxComponent({ timesRead, setCheckState, compulsoryRead }: checkboxProps) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" onClick={compulsoryRead ? timesRead<1 ? ()=>{} : ()=>setCheckState(prev=>prev+1) : ()=>setCheckState(prev=>prev+1)} checked={timesRead<1 ? false : (compulsoryRead? timesRead%2===0 : timesRead%2!==0 ) ? true : false} />
            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Dialog>
                    {/* TRIGGERER ------------------------------------- */}
                    <DialogTrigger asChild>
                        <span onClick={()=>setCheckState(prev=>prev+1)} className="cursor-pointer hover:underline">Accept terms and conditions</span>
                    </DialogTrigger>

                    {/* CONTENT TO SHOW ------------------------------- */}
                    <TermsConditionsDialogComponent />
                </Dialog>
            </label>
        </div>
    )
}
