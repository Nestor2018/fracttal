import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import useToast from "../hooks/useToast";

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

export const createEmployee = createAsyncThunk(
  "employees/createEmployee",
  async ({ credentials }) => {
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: credentials.id,
        nombre: credentials.name,
        descripcion: credentials.description
      })
    };
    let response = await fetch(
      `https://fracttal-1f4cd-default-rtdb.firebaseio.com/employees/${credentials.id}.json`,
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

export const editEmployee = createAsyncThunk(
  "employees/editEmployee",
  async ({ credentials }) => {
    let options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: credentials.id,
        nombre: credentials.name,
        descripcion: credentials.description
      })
    };
    let response = await fetch(
      `https://fracttal-1f4cd-default-rtdb.firebaseio.com/employees/${credentials.id}.json`,
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

export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployees",
  async ({ credentials }) => {
    let options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let response = await fetch(
      `https://fracttal-1f4cd-default-rtdb.firebaseio.com/employees/${credentials.id}.json`,
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

let employeesSlice = createSlice({
  name: "employees",
  initialState: {
    statusGetEmployees: "",
    statusCreateEmployees: "",
    statusDeleteEmployee: "",
    statusEditEmployee: "",
    employees: []
  },
  reducers: {},
  extraReducers: {
    [getEmployees.pending]: state => {
      state.statusGetEmployees = "loading";
    },
    [getEmployees.fulfilled]: (state, action) => {
      state.statusGetEmployees = "success";
      if (action.payload) {
        let employeesObject = Object.values(action.payload);
        let employeesNotNull = employeesObject.filter(
          employee => employee !== null
        );
        state.employees = employeesNotNull;
      } else {
        state.employees = [];
      }
    },
    [getEmployees.rejected]: state => {
      state.statusGetEmployees = "failed";
    },
    [createEmployee.pending]: state => {
      state.statusCreateEmployees = "loading";
    },
    [createEmployee.fulfilled]: state => {
      state.statusCreateEmployees = "success";
      useToast("Empleado creado correctamente", "#3BA536");
    },
    [createEmployee.rejected]: state => {
      state.statusCreateEmployees = "failed";
    },
    [deleteEmployee.pending]: state => {
      state.statusDeleteEmployee = "loading";
    },
    [deleteEmployee.fulfilled]: state => {
      state.statusDeleteEmployee = "success";
      useToast("Empleado eliminado correctamente", "#3BA536");
    },
    [deleteEmployee.rejected]: state => {
      state.statusDeleteEmployee = "failed";
    },
    [editEmployee.pending]: state => {
      state.statusEditEmployee = "loading";
    },
    [editEmployee.fulfilled]: state => {
      state.statusEditEmployee = "success";
      useToast("Empleado editado correctamente", "#3BA536");
    },
    [editEmployee.rejected]: state => {
      state.statusEditEmployee = "failed";
    }
  }
});

export default employeesSlice.reducer;
