import { useNavigate } from 'react-router';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };
    return (
        <Button variant='completeGhost' onClick={handleLogout}>
            <LogOut className='text-destructive' />
        </Button>
    );
};

export default Logout;
