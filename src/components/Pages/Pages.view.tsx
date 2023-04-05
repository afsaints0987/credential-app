import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Courses from "../../pages/Courses/Courses";
import Partners from "../../pages/Partners";
import Facilitators from "../../pages/Facilitators";
import Recepients from "../../pages/Recepients";
import Credentials from "../../pages/Credentials";

const Pages: React.FC = () => {
  return (
    <div className="container-flex p-4 col-md-9">
      <AppRoute />
    </div>
  );
};

const AppRoute: React.FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/facilitators" element={<Facilitators />} />
      <Route path="/recepients" element={<Recepients />} />
      <Route path="/credentials" element={<Credentials />} />
    </Routes>
  );
};

export default Pages;
