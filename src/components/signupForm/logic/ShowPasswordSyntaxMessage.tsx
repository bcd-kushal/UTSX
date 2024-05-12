
import { PasswordPreviewSyntaxType } from "../utils/interfaces"
import { INVALID_MSG_COLOR, VALID_MSG_COLOR } from "../constants/colors"
import { TickCross } from "./TickCross"
import { REGEX } from "../constants/regex"

export function ShowPasswordSyntaxMessage({ password, passwordChecks }:PasswordPreviewSyntaxType) {
    const minLength = passwordChecks.minLength || 8
    const needPasswordCheck = passwordChecks.digit || passwordChecks.lowerCase || passwordChecks.upperCase || passwordChecks.special
    
    const regexTests = {
        upperCase: REGEX.UPPERCASE.test(password),
        lowerCase: REGEX.LOWERCASE.test(password),
        digit: REGEX.DIGIT.test(password),
        special: REGEX.SPECIAL.test(password),
    }
    const allRegexTestPassed = regexTests.digit && regexTests.lowerCase && regexTests.special && regexTests.upperCase
    const isLengthSufficing = password.length >= passwordChecks.minLength

    const passwordLengthStyles = `${isLengthSufficing ? VALID_MSG_COLOR : INVALID_MSG_COLOR} ${needPasswordCheck ? 'mb-2' : ''}`
    return (
        <> 
            <div className={passwordLengthStyles}><TickCross isValid={isLengthSufficing} /> Minimum length {minLength} </div> 
            {needPasswordCheck ? <>
                <span className={allRegexTestPassed ? VALID_MSG_COLOR : ""}>Password should have:</span> <br/>
                {passwordChecks.upperCase   ? <><span className={regexTests.upperCase? VALID_MSG_COLOR : INVALID_MSG_COLOR}><TickCross isValid={regexTests.upperCase} /> atleast one upper-case letter</span> <br/></> : <></>}
                {passwordChecks.lowerCase   ? <><span className={regexTests.lowerCase? VALID_MSG_COLOR : INVALID_MSG_COLOR}><TickCross isValid={regexTests.lowerCase} /> atleast one lower-case letter</span> <br/></> : <></>}
                {passwordChecks.digit       ? <><span className={regexTests.digit    ? VALID_MSG_COLOR : INVALID_MSG_COLOR}><TickCross isValid={regexTests.digit}     /> atleast one digit (0-9)</span> <br/></> : <></>}
                {passwordChecks.special     ? <><span className={regexTests.special  ? VALID_MSG_COLOR : INVALID_MSG_COLOR}><TickCross isValid={regexTests.special}   /> atleast one special character @#$%^&+=_</span><br/></> : <></>} 
            </> : <></>}
        </> 
    )
}