import { createSlice, PayloadAction } from "@reduxjs/toolkit";
  
interface Form {
  login: string;
  email: string;
  password: string;
}
export const registerSlice = createSlice({
  name: "register",
  initialState: [],
  reducers: {
    // определенно, редьюсеры не должны содержать побочные действия, такие как console.log или alert, редьюсеры должны быть чистыми функциями. Однако, очевидно, что данные формы регистрации должны передаваться на сервер. Alert - лишь имитация действия. Т.е. sendForm в дальнейшем, уже при работе с сервером, должен будет изменить свое тело и перенестись в extraReducers. Код здесь, а не в компоненте, для правдоподобия.
    sendForm(state, action: PayloadAction<Form>){
      const {login, email, password} = action.payload
      alert(`Логин: ${login}; Email: ${email}; Пароль:${password}`)
    }
  },
  
});

export const { sendForm } = registerSlice.actions;

export default registerSlice.reducer;
