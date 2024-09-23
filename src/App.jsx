
import { Routes, Route } from "react-router-dom";
import ProviderRoutes from "./routes/ProviderRoutes.jsx";



function App() {

  return (
 

    <Routes>
      <Route path="/*" element={<ProviderRoutes />} />
    </Routes>

    </>

  );
}

export default App;