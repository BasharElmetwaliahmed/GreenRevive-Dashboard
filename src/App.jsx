import { BrowserRouter, Route ,Routes } from "react-router-dom"
  import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import Home from "./pages/Home"
import Login from "./pages/Login"
import { GlobalStyles } from "./styles/GlobalStyles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import UsersRoles from "./pages/UsersRoles";
import AppLayout from "./ui/AppLayout";


const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UsersRoles />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App