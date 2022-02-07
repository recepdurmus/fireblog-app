import "./App.css";
import AuthContextProvider from "./context/AuthContextProvider";
import BlogContextProvider from "./context/BlogContextProvider";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <BlogContextProvider>
        <AuthContextProvider>
          <AppRouter />
        </AuthContextProvider>
      </BlogContextProvider>
    </div>
  );
}

export default App;
