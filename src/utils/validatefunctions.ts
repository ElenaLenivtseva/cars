import { Keys } from "../components/Form/hookValidate";
import { loginErrorText, passwordErrorText, emailErrorText } from "../constants/errorContstants";

export function isEmailValid(value: string) {
    const EMAIL_REGEXP =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    return EMAIL_REGEXP.test(value);
}

type setErrorsTextType = React.Dispatch<React.SetStateAction<{
  loginError: string;
  emailError: string;
  passwordError: string;
}>>

type ErrorsText = {
  loginError: string;
  emailError: string;
  passwordError: string;
}

type manageButtonType = (key: Keys, value: boolean) => void;
type ValidateInputFunction = (errorsText: ErrorsText, name: Keys, value: string,setErrorsText: setErrorsTextType,manageButton:manageButtonType) => void;

export const validateLogin: ValidateInputFunction = function (errorsText, name, value,setErrorsText,manageButton){
  if (value.length > 4) {
    setErrorsText({ ...errorsText, loginError: "" });
    manageButton(name, false);
  } else {
    setErrorsText({ ...errorsText, loginError: loginErrorText });
    manageButton(name, true);
  }
}


export const validatePassword: ValidateInputFunction = function (errorsText, name, value,setErrorsText, manageButton){
  if (value.length > 7) {
    setErrorsText({ ...errorsText, passwordError: "" });
    manageButton(name, false);
  } else {
    setErrorsText({ ...errorsText, passwordError: passwordErrorText });
    manageButton(name, true);
  }
}

export const validateEmail: ValidateInputFunction = function(errorsText, name, value,setErrorsText, manageButton){
  if (isEmailValid(value)) {
    setErrorsText({ ...errorsText, emailError: "" });
    manageButton(name, false);
  } else {
    setErrorsText({ ...errorsText, emailError: emailErrorText });
    manageButton(name, true);
  }
}