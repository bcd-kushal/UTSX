import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { TermsConditionsDialogComponent } from "./TermsConditions"
import { checkboxProps } from "../utils/interfaces"

export function CheckboxComponent({ checkState, setCheckState }: checkboxProps) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" onClick={() => setCheckState(prev => !prev)} />
            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Dialog>
                    {/* TRIGGERER ------------------------------------- */}
                    <DialogTrigger asChild>
                        <span className="cursor-pointer hover:underline">Accept terms and conditions</span>
                    </DialogTrigger>

                    {/* CONTENT TO SHOW ------------------------------- */}
                    <TermsConditionsDialogComponent />
                </Dialog>
            </label>
        </div>
    )
}
