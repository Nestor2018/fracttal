import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import useToast from "../hooks/useToast";

export const createAccount = createAsyncThunk(
  "user/createAccount",
  async ({ credentials }) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.hashedPassword,
        returnSecureToken: true
      })
    };
    let response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        import.meta.env.VITE_APP_API_KEY_FIREBASE
      }`,
      options
    )
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => console.error(error, "el error del login admin"));
    return response;
  }
);

export const login = createAsyncThunk("user/login", async ({ credentials }) => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: credentials.email,
      password: credentials.hashedPassword,
      returnSecureToken: true
    })
  };
  let response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
      import.meta.env.VITE_APP_API_KEY_FIREBASE
    }`,
    options
  )
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => console.error(error, "el error del login admin"));
  return response;
});

let userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    statusCreateAccount: "",
    statusLogin: ""
  },
  reducers: {
    logOut: state => {
      state.user = null;
    }
  },
  extraReducers: {
    [createAccount.pending]: state => {
      state.statusCreateAccount = "loading";
    },
    [createAccount.fulfilled]: (state, action) => {
      state.statusCreateAccount = "success";
      if (action.payload?.error?.code == 400) {
        if (action.payload.error.message == "INVALID_PASSWORD") {
          useToast("La contraseña es incorrecta", "#e41e25");
        } else if (action.payload.error.message == "EMAIL_NOT_FOUND") {
          useToast("El correo electrónico no existe", "#e41e25");
        } else if (action.payload.error.message == "INVALID_EMAIL") {
          useToast("El correo electrónico es invalido", "#e41e25");
        } else if (action.payload.error.message == "MISSING_PASSWORD") {
          useToast("La contraseña es invalida", "#e41e25");
        }
      } else {
        state.user = action.payload;
      }
    },
    [createAccount.rejected]: state => {
      state.statusCreateAccount = "failed";
    },
    [login.pending]: state => {
      state.statusLogin = "loading";
    },
    [login.fulfilled]: (state, action) => {
      state.statusLogin = "success";
      if (action.payload?.error?.code == 400) {
        if (action.payload.error.message == "INVALID_PASSWORD") {
          useToast("La contraseña es incorrecta", "#e41e25");
        } else if (action.payload.error.message == "EMAIL_NOT_FOUND") {
          useToast("El correo electrónico no existe", "#e41e25");
        } else if (action.payload.error.message == "INVALID_EMAIL") {
          useToast("El correo electrónico es invalido", "#e41e25");
        }
      } else {
        state.user = action.payload;
      }
    },
    [login.rejected]: state => {
      state.statusLogin = "failed";
    }
  }
});

export const { signIn, logOut } = userSlice.actions;

export default userSlice.reducer;
