import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Members from './pages/Members';
import Experience from './pages/Experience';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing/>} />
          <Route path="/home" element={<Landing/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;