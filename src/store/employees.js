import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async () => {
    let response = await fetch(
      `https://fracttal-1f4cd-default-rtdb.firebaseio.com/employees.json`
    )
      .then(response => response.json())
      .then(data => {
        return data;
      })
      .catch(error => console.error(error));
    return response;
  }
);

let employeesSlice = createSlice({
  name: "employees",
  initialState: {
    status: "",
    employees: []
  },
  reducers: {},
  extraReducers: {
    [getEmployees.pending]: state => {
      state.status = "loading";
    },
    [getEmployees.fulfilled]: (state, action) => {
      state.status = "success";
      state.employees = action.payload;
    },
    [getEmployees.rejected]: state => {
      state.status = "failed";
    }
  }
});

//export const { } = employeesSlice.actions;

export default employeesSlice.reducer;
