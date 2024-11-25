

import {  RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import router from './routes/ProviderRoutes'; // Import your router configuration

import { store } from './redux/store';


export const App = () => {
  return (
    <Provider store={store}> 

      <RouterProvider router={router} />
      </Provider>
  );
};

export default App;
