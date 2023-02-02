import Dashboard from "../pages/dashboard/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "../pages/user/User.jsx";
import Posts from "../pages/posts/Posts";
import Reports from "../pages/reports/Reports";
import RecycleUser from "../pages/recycleUser/RecycleUser";
import RecyclePost from "../pages/recyclePost/RecyclePost";
import Comments from "../component/comments/Comments";
import Login from "../pages/Login/Login";
import PasswordChange from "../component/passwordchange/PasswordChange";
import PasswordReset from "../component/passwordreset/PasswordReset";
import PostDetailView from "../component/postdetialview/PostDetailView";
import UserDetailView from "../component/userdetailview/UserDetailView";
import ProtectedRoute from "../ProtectedRoutes/ProtectedRoute";
import LoginProtected from "../ProtectedRoutes/LoginProtected";
import RecyclePostView from "../component/recyclePostTable/RecyclePostView";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginProtected Component={Dashboard} />} />
      {/* <Route path="/login" element={ <LoginProtected Component={Login} /> } /> */}
      <Route
        path="/dashboard"
        element={<ProtectedRoute Component={Dashboard} />}
      />
      <Route path="/users" element={<ProtectedRoute Component={User} />} />
      <Route path="/posts" element={<ProtectedRoute Component={Posts} />} />
      <Route path="/reports" element={<ProtectedRoute Component={Reports} />} />
      {/*       
      <Route path="/posts/:id" element={<Comments />} />
      <Route path="/reports:/id" element={<Reports />} /> */}

      <Route path="/post/view/:id" element={<PostDetailView />} />
      <Route path="/user/view/:id" element={<UserDetailView />} />

      <Route path="/recyclepost/view/:id" element={<RecyclePostView />} />

      <Route path="/change-password" element={<ProtectedRoute Component={PasswordChange} />} />
      <Route path="/recyclebin/posts" element={<ProtectedRoute Component={RecyclePost} />} />
      <Route path="/recyclebin/users" element={<ProtectedRoute Component={RecycleUser} />} />
      <Route path="/password/reset" element={<ProtectedRoute Component={PasswordReset} />} />
    </Routes>
  );
};

export default Routing;
