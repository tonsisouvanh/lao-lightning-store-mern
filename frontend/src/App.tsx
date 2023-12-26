import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import AddFood from "./pages/admin/AddFood.tsx";
import AddRestaurant from "./pages/admin/AddRestaurant.tsx";
import EditFood from "./pages/admin/EditFood.tsx";
import EditRestaurant from "./pages/admin/EditRestaurant.tsx";
import FoodListPage from "./pages/admin/FoodListPage.tsx";
import RestaurantListPage from "./pages/admin/RestaurantListPage.tsx";
import RestaurantlistPublicPage from "./pages/RestaurantlistPublicPage.tsx";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const BlogPage = lazy(() => import("./pages/BlogPage"));
// const CreateBlog = lazy(() => import("./pages/CreateBlog"));
// const SignupPage = lazy(() => import("./pages/SignupPage"));
// const SigninPage = lazy(() => import("./pages/SigninPage"));
// const ProfilePage = lazy(() => import("./pages/ProfilePage"));
// const AdminLayout = lazy(() => import("./pages/admin/AdminLayout.tsx"));
// const Dashboard = lazy(() => import("./pages/admin/Dashboard.tsx"));
import { Toaster } from "react-hot-toast";
import BlogPage from "./pages/BlogPage.tsx";
import CreateBlog from "./pages/CreateBlog.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import SigninPage from "./pages/SigninPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
import Contact from "./components/layout/Contact.tsx";
import RestaurantDetail from "./pages/RestaurantDetailPage.tsx";
import ButtonSrollToTop from "./components/buttons/ButtonSrollToTop.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Toaster />
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/bloglist" element={<BlogPage />} />
            {/* <Route path="/blog/bloglist/:id" element={<Blog />} /> */}
            <Route path="/blog/create" element={<CreateBlog />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route
              path="/restaurantlist"
              element={<RestaurantlistPublicPage />}
            />

            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="restaurantlist" element={<RestaurantListPage />} />
              <Route path="restaurantlist/add" element={<AddRestaurant />} />
              <Route
                path="restaurantlist/edit/:id"
                element={<EditRestaurant />}
              />
              <Route path="foodlist" element={<FoodListPage />} />
              <Route path="foodlist/add" element={<AddFood />} />
              <Route path="foodlist/edit/:id" element={<EditFood />} />
            </Route>
          </Routes>
          <ButtonSrollToTop />
          <ScrollToTop />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
