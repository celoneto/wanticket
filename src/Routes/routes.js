import React from 'react'
import Login from '../Pages/Login/index'
import ProtectedRoutes from '../Routes/ProtectedRoutes'
import Cadastro from '../Pages/Cadastro/index'
import Evento from '../Pages/Eventos/index'
import Home from '../Pages/Home/index'
import Pay from '../Pay/index'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Edit from '../Pages/Eventos/edit'

const Routering = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="*" element={<Login/>} />
        <Route path="/cadastrar" element={<Cadastro/>} />
        <Route path="/home" element={
          <ProtectedRoutes>
            <Home/>
          </ProtectedRoutes>
          }
        />
        <Route path="/evento" element={
          <ProtectedRoutes>
            <Evento/>
          </ProtectedRoutes>
          }
        />
        <Route path="/edit" element={
          <ProtectedRoutes>
            <Edit/>
          </ProtectedRoutes>
          }
        />
        <Route path="/pagar" element={
          <ProtectedRoutes>
            <Pay/>
          </ProtectedRoutes>
          }
        />
      </Routes>
    </Router>
   );
}
 
export default Routering;