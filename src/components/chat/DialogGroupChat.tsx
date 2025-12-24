import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';
import { useState } from 'react';
import { conversations } from '@/types/type';

const DialogGroupChat = () => {
    const [groupName, setGroupName] = useState('');
    const [members, setMembers] = useState<string[]>([]);

    const privateUsers = conversations.filter((c) => c.type === 'private');

    const toggleMember = (id: string) => {
        setMembers((prev) =>
            prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
        );
    };
    const handleCreateGroup = () => {
        const newGroup = {
            id: Date.now().toString(),
            type: 'group' as const,
            name: groupName,
            groupAvatar: 'https://picsum.photos/seed/group/200/300',
            lastMessage: 'Nhóm vừa được tạo',
            time: 'now',
            members
        };
        console.log('GROUP CREATED:', newGroup);
    };

    return (
        <>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Users />
                    </DialogTrigger>

                    <DialogContent className='sm:max-w-[420px]'>
                        <DialogHeader>
                            <DialogTitle>Thêm nhóm</DialogTitle>
                        </DialogHeader>

                        {/* Tên nhóm */}
                        <div className='space-y-2'>
                            <label className='text-sm font-medium'>
                                Tên nhóm
                            </label>
                            <Input
                                placeholder='Nhập tên nhóm'
                                value={groupName}
                                onChange={(e) => setGroupName(e.target.value)}
                            />
                        </div>

                        {/* Danh sách thành viên */}
                        <div className='space-y-2'>
                            <p className='text-sm font-medium'>
                                Chọn thành viên
                            </p>

                            <div className='max-h-40 overflow-y-auto space-y-2'>
                                {privateUsers.map((user) => (
                                    <label
                                        key={user.id}
                                        className='flex items-center gap-3 cursor-pointer'
                                    >
                                        <Checkbox
                                            checked={members.includes(user.id)}
                                            onCheckedChange={() =>
                                                toggleMember(user.id)
                                            }
                                        />
                                        <img
                                            src={user.avatar}
                                            className='h-8 w-8 rounded-full'
                                        />
                                        <span className='text-sm'>
                                            {user.name}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className='flex justify-end gap-2 pt-2'>
                            <Button variant='outline'>Hủy</Button>
                            <Button
                                onClick={handleCreateGroup}
                                disabled={!groupName || members.length < 2}
                            >
                                Tạo nhóm
                            </Button>
                        </div>
                    </DialogContent>
                </form>
            </Dialog>
        </>
    );
};

export default DialogGroupChat;
