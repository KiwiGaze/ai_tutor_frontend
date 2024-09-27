import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Box} from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage/Mainpage';
import GalleryPage from './pages/GalleryPage/GalleryPageMod';
import RegisterPage from './pages/RegisterPage/RegisterPage';  

import HomePage from './pages/StudentHomepage/StudentHomepage';
import AssessmentPage from './pages/StudentAssessmentPage/StudentAssessmentPage';
import ReviewPage from './pages/StudentReviewPage/StudentReviewPage';
import ChatRoomPage from './pages/ChatRoomPage/ChatRoomPage';
import CourseLessonPage from './pages/CourseLessonPage/CourseLessonPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<GalleryPage />} />  {/* Use the correct component here */}
        <Route path="/register" element={<RegisterPage />} />  {/* Add this route */}
        <Route path="/student/home" element={<HomePage />} />
        <Route path="/student/courses" element={<GalleryPage />} />
        <Route path="/student/assessments" element={<AssessmentPage />} />
        <Route path="/student/reviews" element={<ReviewPage />} />
        <Route path="/chatroom" element={<ChatRoomPage />} />
        <Route path="/student/course-lesson" element={<CourseLessonPage />} /> 
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
 