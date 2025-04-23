import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { QueryClient, QueryClientProvider } from "react-query";
import ProtectedRoute from "./components/custom/ProtectedRoute";
import SearchPage from "./pages/SearchPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
<Route element={<ProtectedRoute />}>
              <Route path="/" element={<HomePage />} />

              <Route path="/search" element={<SearchPage />} />
              
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />        
          </Routes>
        </BrowserRouter>
    </QueryClientProvider>
  )
}
export default App