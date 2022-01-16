import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import PrivateRouter from "./router/PrivateRouter";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter />
        {/* <PrivateRouter/> */}
      </AuthContextProvider>
    </div>
  );
}

export default App; 
