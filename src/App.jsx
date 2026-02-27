import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Dashboard } from './pages/Dashboard';
import { CourseDetail } from './pages/CourseDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          {/* We use a simple layout inside Dashboard or independent page. Assuming Dashboard Layout is fine for CourseDetail since it has the sidebar. */}
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="*" element={<div className="p-8"><h1 className="text-2xl font-bold">Work in Progress</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
