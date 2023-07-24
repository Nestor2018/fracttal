import "./sass/app.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

import AppRoutes from "./routes/AppRoutes";
import { store, persistor } from "./store";
import Loading from "./components/spinner/Spinner";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Toaster />
          <AppRoutes />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
