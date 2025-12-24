import { useNavigate } from 'react-router';
import { Button } from '../ui/button';
import { LogOut } from 'lucide-react';

const Logout = () => {
    return (
        <Button variant='completeGhost'>
            <LogOut className='text-destructive' />
        </Button>
    );
};

export default Logout;
