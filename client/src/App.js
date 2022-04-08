import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import Info from './pages/Info'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/info' element={<Info />} />
            </Routes>
        </BrowserRouter>
    );
}