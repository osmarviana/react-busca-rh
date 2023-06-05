import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "../components/navigation/Navigation";

import { HomePage } from "./HomePage";
import { RegisterPage } from "./RegisterPage";
import { SignUpPage } from "./SignUpPage";
import { ContactPage } from "./ContactPage";
import { BlogPage } from "./BlogPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route exact path="register" element={<RegisterPage />} />
        <Route exact path="signup" element={<SignUpPage />} />
        <Route exact path="contact" element={<ContactPage />} />
        <Route exact path="blog" element={<BlogPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
