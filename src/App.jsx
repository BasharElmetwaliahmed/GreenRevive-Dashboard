import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import UsersRoles from "./pages/UsersRoles";
import AppLayout from "./ui/AppLayout";
import Categories from "./pages/Categories";
import { useDarkMode } from "./context/DarkModeProvider";
import { Toaster } from "react-hot-toast";
import Articles from "./pages/Articles";
import CreateArticle from "./pages/CreateArticle";
import { useEffect } from "react";
import { onMessage } from "firebase/messaging";
import { messaging } from "./utils/firebase";
import UserSettings from "./pages/UserSettings";



const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="users" element={<UsersRoles />} />
            <Route path="categories" element={<Categories />} />
            <Route path="articles" element={<Articles />} />
            <Route path='articles/create' element={<CreateArticle />} />
            <Route path='usersettings' element={<UserSettings/>}/>
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
      {/* <ReactQueryDevtools /> */}
      <Toaster
        gutter={8}
        toastOptions={{
          duration: 3000,

          style: {
            background: "var( --color-grey-0)",
            color: "var( --color-grey-900)",
            boxShadow:
              "16px 0px 10px rgb(0 0 0 / 0%), 0 3px 3px rgb(0 0 0 / 42%)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
