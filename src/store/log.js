import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getIp = createAsyncThunk("employees/getIp", async () => {
  let response = await fetch(`https://api.ipify.org/?format=json`)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => console.error(error));
  return response;
});

export const createLog = createAsyncThunk(
  "employees/createLog",
  async ({ credentials }) => {
    let options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: credentials.user,
        hora: credentials.hour,
        accion: credentials.action,
        ip: credentials.ip
      })
    };
    let response = await fetch(
      `https://fracttal-1f4cd-default-rtdb.firebaseio.com/logs.json`,
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

export const getLogs = createAsyncThunk("employees/getLogs", async () => {
  let response = await fetch(
    `https://fracttal-1f4cd-default-rtdb.firebaseio.com/logs.json`
  )
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => console.error(error));
  return response;
});

let logSlice = createSlice({
  name: "log",
  initialState: {
    statusIp: "",
    statusCreateLog: "",
    statusGetLogs: "",
    ip: "",
    logs: []
  },
  reducers: {},
  extraReducers: {
    [getIp.pending]: state => {
      state.statusIp = "loading";
    },
    [getIp.fulfilled]: (state, action) => {
      state.statusIp = "success";
      state.ip = action.payload.ip;
    },
    [getIp.rejected]: state => {
      state.statusIp = "failed";
    },
    [createLog.pending]: state => {
      state.statusCreateLog = "loading";
    },
    [createLog.fulfilled]: (state) => {
      state.statusCreateLog = "success";
    },
    [createLog.rejected]: state => {
      state.statusCreateLog = "failed";
    },
    [getLogs.pending]: state => {
      state.statusGetLogs = "loading";
    },
    [getLogs.fulfilled]: (state, action) => {
      state.statusGetLogs = "success";
      state.logs = Object.values(action.payload);
    },
    [getLogs.rejected]: state => {
      state.statusGetLogs = "failed";
    }
  }
});

export default logSlice.reducer;
