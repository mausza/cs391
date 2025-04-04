import './App.css';

import {RouterProvider, createBrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import {useEffect} from "react";
import Home from './components/Home.tsx';
import Education from './components/Education.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Courses from './components/Courses.tsx';
import Skills from './components/Skills.tsx';



function Root(){
    const location = useLocation();

    useEffect(() => {
        // location.pathname is something like "/education" or "/"
        let lastSegment = location.pathname.split('/').filter(Boolean).pop() || '';
        lastSegment = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

        if (lastSegment === '') {
            document.title = 'Home | Resume';
        } else {
            document.title = `${lastSegment} | Resume`;
        }
    }, [location]);
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/education" element={<Education />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/coursework" element={<Courses />} />
                <Route path="/skills" element={<Skills />} />
            </Routes>
        </>
    );
}

const router = createBrowserRouter([{path:'*', Component: Root},]);

export default function App(){
    return (
        <RouterProvider router={router}/>
    );
}