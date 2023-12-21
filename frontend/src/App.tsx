import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import RestaurantListPage from "./pages/admin/RestaurantListPage.tsx";
import AddRestaurant from "./pages/admin/AddRestaurant.tsx";
import EditRestaurant from "./pages/admin/EditRestaurant.tsx";
import FoodListPage from "./pages/admin/FoodListPage.tsx";
import AddFood from "./pages/admin/AddFood.tsx";
import EditFood from "./pages/admin/EditFood.tsx";

// const HomePage = lazy(() => import("./pages/HomePage"));
// const BlogPage = lazy(() => import("./pages/BlogPage"));
// const CreateBlog = lazy(() => import("./pages/CreateBlog"));
// const SignupPage = lazy(() => import("./pages/SignupPage"));
// const SigninPage = lazy(() => import("./pages/SigninPage"));
// const ProfilePage = lazy(() => import("./pages/ProfilePage"));
// const AdminLayout = lazy(() => import("./pages/admin/AdminLayout.tsx"));
// const Dashboard = lazy(() => import("./pages/admin/Dashboard.tsx"));
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import CreateBlog from "./pages/CreateBlog.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import SigninPage from "./pages/SigninPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import AdminLayout from "./pages/admin/AdminLayout.tsx";
import Dashboard from "./pages/admin/Dashboard.tsx";
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
            <Route path="/blog/create" element={<CreateBlog />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/profile" element={<ProfilePage />} />

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
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
