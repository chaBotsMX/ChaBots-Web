import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "./app.scss";
import Landing from './pages/Landing/Landing'
import Members from './pages/Members/Members';
import Experience from './pages/Experience/Experience';
import NotFound from './pages/NotFound/NotFound';
import Documentation from './pages/Documentation/Documentation';
import SupportUs from './pages/SupportUs/SupportUs';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing/>} />
          <Route path="/home" element={<Landing/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/documentation" element={<Documentation/>}/>
          <Route path="/support us" element={<SupportUs/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;