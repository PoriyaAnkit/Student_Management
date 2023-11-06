import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import { Routes, Route } from "react-router-dom"
import Dashboard from './Dashbord';
import Adduser from './Adduser';
import Login from './Login';
import Addmition from './Addmition';
import Addcourse from './Addcourse';
import Addcontent from './Addcontent';
import Viewuser from './Viewuser';
import Viewcourse from './VIewcourse';
import Viewcontent from './Viewcontent';
import Viewadd from './VIewadd';
import { useState } from 'react';
import Protected from './Protected';
import Studentdata from './Studentdata';
import UpdateAdd from './UpdateAdd';

function App() {

  // let token =localStorage.getItem('token')
  // console.log(token)
 
  return (
    <>


      <Routes>
      <Route path="/" element={<Login />} />
        <Route path='/home' element={
          <Protected>
            <Header />
          </Protected>}>
        </Route>
        <Route path="/dash" element={<Protected><Dashboard /></Protected>} />
        <Route path="/adduser" element={<Protected><Adduser /></Protected>} />
        <Route path="/addmition" element={<Protected><Addmition /></Protected>} />
        <Route path="/addcourse" element={<Protected><Addcourse /></Protected>} />
        <Route path="/addcontent" element={<Protected><Addcontent /></Protected>}  />
        <Route path="/viewuser" element={<Protected><Viewuser /></Protected>} />
        <Route path="/viewcourse" element={<Protected><Viewcourse /></Protected>}  />
        <Route path="/viewcontent" element={<Protected><Viewcontent /></Protected>}  />
        <Route path="/viewadd" element={<Protected><Viewadd /></Protected>} />
        <Route path="/studentdata/:id" element={<Protected><Studentdata /></Protected>} />
        <Route path="/updatedata/:id" element={<Protected><UpdateAdd /></Protected>} />
      </Routes>
    </>
  );
}

export default App;
