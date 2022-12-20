import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import Services from "./pages/services/Services";
import { createContext, useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Products from "./pages/products/Products";
import Completion from "./components/completion/Completion";
import Cart from "./pages/cart/Cart";
import CourseModal from "./components/modal/display-course/CourseModal";
import Admin from "./pages/admin/dashboard/Admin";
import EditCourse from "./pages/admin/course-edit/EditCourse";
import { AdminPrivateRoute, PrivateRoute } from "./components/private/privateRoute";
import BuyedCourses from "./pages/cart/BuyedCourses";

export const SidebarContext = createContext(null);
export const CourseModalContext = createContext(null);
export const Authentication = createContext(null);

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCourseModalOpen, setCourseModalOpen] = useState(false);
  const [isAuthenticated, setAuthentication] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [User, setUser] = useState();
  const [courseModalData,setCourseModalData] = useState()
  return ( 
    <div className="App">
      <SidebarContext.Provider value={{ isSidebarOpen, setSidebarOpen }}>
        <CourseModalContext.Provider
          value={{ isCourseModalOpen, setCourseModalOpen ,courseModalData,setCourseModalData }}
        >
          <Authentication.Provider value={{isAuthenticated,setAuthentication,isLoading,setLoading,User,setUser}}>
            
            <Router>
              {isSidebarOpen && <Sidebar />}
              {isCourseModalOpen && <CourseModal />}
              <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<AboutUs />} /> 
                <Route path="/contactus" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route element={<PrivateRoute isLoading={isLoading} redirectOn={'/'} authenticated={isAuthenticated}/>}>
                  <Route path="/complete" element={<Completion />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/my-courses" element={<BuyedCourses />} />
                </Route>
                {/* <Route element={<AdminPrivateRoute isLoading={isLoading} redirectOn={'/'} authenticated={isAuthenticated} user={User} onlyFor={"User"}/>}> */}
                  <Route path="/admin" element={<Admin />} />
                  <Route path="/admin/edit" element={<EditCourse />} />
                {/* </Route> */}
                  
              </Routes>
            </Router>
          </Authentication.Provider>
        </CourseModalContext.Provider>
      </SidebarContext.Provider>
    </div>
  );
};

export default App;
