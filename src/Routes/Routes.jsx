import React from 'react';
import { Routes, Route } from "react-router-dom";
import AddStudent from '../Pages/AddStudent';
import Contact from '../Pages/ContactUs';
import EditDetails from '../Pages/EditDetails';
import Home from '../Pages/Home';
import Students from '../Pages/Students';

const RoutesComp = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="Students" element={<Students />} />
                <Route path="ContactUs" element={<Contact />} />
                <Route path="Students/AddNewStudent" element={<AddStudent />} />
                <Route path="Students/EditDetails" element={<EditDetails />} />
            </Routes>
        </div>
    );
}

export default RoutesComp;