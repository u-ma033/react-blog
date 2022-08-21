import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { Blog } from "./blog"
import { Admin } from "./Admin/AdminPage"

export class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    )
  }
}
