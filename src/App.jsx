import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { AppRoute } from "./routes/AppRoute";
const router = createBrowserRouter(AppRoute)
export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
