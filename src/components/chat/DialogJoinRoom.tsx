import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogClose,
    DialogDescription
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { useState } from 'react';
import { joinRoom } from '@/socket/socketClient';

const DialogJoinRoom = () => {
    const [roomName, setRoomName] = useState('');

    const handleJoinRoom = () => {
        if (!roomName) return;
        joinRoom(roomName);
        console.log('Request join room:', roomName);
        setRoomName('');
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='flex justify-center w-8 cursor-pointer'>
                    <LogIn />
                </div>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[420px]'>
                <DialogHeader>
                    <DialogTitle>Tham gia phòng</DialogTitle>
                    <DialogDescription>
                        Nhập tên phòng để tham gia cuộc trò chuyện.
                    </DialogDescription>
                </DialogHeader>

                <div className='space-y-2 py-4'>
                    <label className='text-sm font-medium'>
                        Tên phòng
                    </label>
                    <Input
                        placeholder='Nhập tên phòng'
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                    />
                </div>

                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant='outline'>Hủy</Button>
                    </DialogClose>
                    <Button
                        onClick={handleJoinRoom}
                        disabled={!roomName}
                    >
                        Tham gia
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DialogJoinRoom;
