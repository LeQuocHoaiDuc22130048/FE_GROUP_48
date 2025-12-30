import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/RegisterPage.tsx';
import AppChat from './pages/ChatPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import { Toaster } from 'sonner';

function App() {
    return (
        <>
            <Toaster richColors position='top-right' />
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate to='/login' replace />}
                    />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/chat' element={<AppChat />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
