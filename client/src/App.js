import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/Info' element={<Info />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}