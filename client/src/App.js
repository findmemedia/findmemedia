import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Info from './pages/Info';

export default function App() {
    return (
        <BrowserRouter>
            {/* TODO: Add header <Header /> */}
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/info' element={<Info />} />
            </Routes>
            {/* TODO: Add footer <Footer /> */}
        </BrowserRouter>
    );
}