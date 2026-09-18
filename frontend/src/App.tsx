import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingLayout from "./layouts/LandingLayout"
import AuthLayout from "./layouts/AuthLayout"
import DashboardLayout from "./layouts/DashboardLayout"
import Home from "./pages/marketing/Home"


function App() {


  return (
    <BrowserRouter>
      <Routes>

        {/* Landing page */}
        <Route element={<LandingLayout />} >
          <Route path="/" element={<Home />} />
        </Route>



        {/* Authentication */}
        <Route element={<AuthLayout />}>
          {/* to br updated later */}
        </Route>


        {/* Dashboard */}
        <Route element={<DashboardLayout />}>
          {/* to br updated later */}
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
