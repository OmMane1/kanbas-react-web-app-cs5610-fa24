import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Routes, Route, Navigate} from "react-router-dom";
import store from "./Kanbas/store";
import { Provider } from "react-redux";

export default function App() {
 return (
  <HashRouter>
       <Provider store={store}>

   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Labs"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kanbas/*" element={<Kanbas />} />
     <Route path="/Kanbas" element={<Navigate to="/Kanbas/Dashboard" />} />    
     </Routes>
   </div>
   </Provider>
  </HashRouter>
);}
