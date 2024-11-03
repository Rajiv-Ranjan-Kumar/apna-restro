import { useState } from "react"
import './ForgotPassword.scss';
import Button from "../../components/Forms/Button/Button"
import InputTag from "../../components/Forms/InputTag/InputTag"
import Otp from "../../components/Otp/Otp";
import { emailValidation, numberValidation, passwordValidation, validateFields } from "../../utils/Base";
import PasswordInputTag from "../../components/Forms/PasswordInputTag/PasswordInputTag";

const ForgotPassword = () => {
  const [isSendOtp, setIsSendOtp] = useState(false);
  const [isValidatedEmail, setIsValidatedEmail] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [otp1, setOtp1] = useState<string>();
  const [otp2, setOtp2] = useState<string>();
  const [otp3, setOtp3] = useState<string>();
  const [otp4, setOtp4] = useState<string>();
  const [resetPasswordData, setResetPasswordData] = useState({
    new_password: '',
    confirm_password: ''
  });
  const [valueError, setValidationError] = useState({fieldName: ''});
  const [passwordFormateValidationError, setPasswordFormateValidationError] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [isOtp, setIsOtp] = useState(false);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValidationError({ fieldName: '' });

    if (name === 'userEmail') {
      setUserEmail(value);

      setIsValidatedEmail(emailValidation(value));
    }else if(name === 'new_password'){
      const validatedNewPassword = passwordValidation(value);
      setResetPasswordData((prevData) => ({...prevData,[name]: String(validatedNewPassword)}));

      const validateFormat = passwordValidation(value, true);
      setPasswordFormateValidationError(validateFormat);
    }else if (name === 'confirm_password') {
      const validatedConfirmPassword = passwordValidation(value);
      setResetPasswordData((prevData) => ({...prevData,[name]: String(validatedConfirmPassword)}));

      if (value !== resetPasswordData.new_password) {
        setPasswordMatch(false)
      } else {
        setPasswordMatch(true)
      }
    }
  }


  const handleSendOtp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('send otp')
    const { fieldName, isValid } = validateFields({ userEmail });
    if (isValid && isValidatedEmail){
      // and here we will send the otp to the user
     
      setIsSendOtp(true);
    }
    setValidationError({ fieldName: fieldName });
  }




  const handleOtpChange = (name: string, value: string) => {

    setValidationError({ fieldName: '' });

    if(name === 'otp1'){
      const validateOtp = numberValidation(value);
      setOtp1(String(validateOtp));
    }else if(name === 'otp2'){
      const validateOtp = numberValidation(value);
      setOtp2(String(validateOtp));
    }else if(name === 'otp3'){
      const validateOtp = numberValidation(value);
      setOtp3(String(validateOtp));
    }else if(name === 'otp4'){
      const validateOtp = numberValidation(value);
      setOtp4(String(validateOtp));
    }
  }


 
const setPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(isOtp){
      const { fieldName, isValid } = validateFields(resetPasswordData);

      if (isValid && passwordMatch) {
        const otp = String(otp1)+String(otp2)+String(otp3)+String(otp4);
        console.log(otp,resetPasswordData)

        //Api Work
      }
      setValidationError({fieldName: fieldName});
      console.log(valueError)
    }else{
      const fieldsNames: {[key: string]: string|undefined}[] = [
        { 'otp1': otp1 }, 
        { 'otp2': otp2 }, 
        { 'otp3': otp3 }, 
        { 'otp4': otp4}
      ]

      for(let i = 0; i < fieldsNames.length; i++) {
        const { fieldName, isValid } = validateFields(fieldsNames[i]);
        if (!isValid) {
          setValidationError({fieldName: fieldName});
          setIsOtp(false);
          break;
        }
        setIsOtp(true);
      };
    }
};


  return (
    <div className="forgot-password">
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
            {isSendOtp?(
              <form onSubmit={setPassword} className="from-container">
                <p>Otp has been send successfully <span>{userEmail}</span></p>
                <Otp 
                  otp1Name={"otp1"} 
                  otp2Name={"otp2"} 
                  otp3Name={"otp3"} 
                  otp4Name={"otp4"}
                  otp1={otp1||''}
                  otp2={otp2||''}
                  otp3={otp3||''}
                  otp4={otp4||''}
                  func={handleOtpChange}
                  valueErrorFields= {valueError}
                />

                <PasswordInputTag 
                  label={"new password"}
                  name={"new_password"} 
                  readonly={false} 
                  placeholder={"Enter new password"}
                  value={resetPasswordData.new_password}
                  func={handleInputChange}
                  isValueError={valueError.fieldName === 'new_password'?true:false}
                  passwordFormateValidationError={passwordFormateValidationError}
                />

                <PasswordInputTag 
                  label={"conform password"}
                  name={"confirm_password"} 
                  readonly={false} 
                  placeholder={"Enter conform password"}
                  value={resetPasswordData.confirm_password}
                  func={handleInputChange}
                  isValueError={valueError.fieldName === 'confirm_password'?true:false}
                  passwordMatch={passwordMatch}
                />
                
                <button type={"submit"} className="set-otp-button">Set Password</button>
                <p>If you have not get any OTP <span style={{cursor:"pointer"}}>send now</span></p>
                </form>
            ):(
              <form onSubmit={handleSendOtp} className="from-container">
                <InputTag 
                  label="email"
                  name={"userEmail"} 
                  type={"email"} 
                  readonly={false} 
                  value={userEmail}
                  placeholder="Enter existing email"
                  func={handleInputChange}
                  isValueError={valueError.fieldName==='userEmail'?true:false}
                />
                {!isValidatedEmail && userEmail.length > 0&&<p className="email-error">Email must valid email formate</p>}
                <Button name={"Send otp"} type={"submit"} />
              </form>
            )}
      </div>
    </div>
  )
}

export default ForgotPassword
