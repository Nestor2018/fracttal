import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppRoutes from "./routes/AppRoutes";
import { store, persistor } from "./store";
import Loading from './components/spinner/Spinner'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
