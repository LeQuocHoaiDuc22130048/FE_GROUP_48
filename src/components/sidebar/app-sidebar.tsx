'use client';

import * as React from 'react';

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/components/ui/sidebar';
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput
} from '@/components/ui/input-group';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { SearchIcon, UserPlus } from 'lucide-react';
import ListConversation from '../chat/ListConversation';
import { NavUser } from './nav-user';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import DialogGroupChat from '../chat/DialogGroupChat';
import { currentUser } from '@/types/type';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    

    

    return (
        <Sidebar variant='inset' {...props} className='border-r'>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size='lg' asChild>
                            <a href='#'>
                                <h1 className='text-xl font-bold uppercase'>
                                    ChatApp
                                </h1>
                            </a>
                        </SidebarMenuButton>
                        <InputGroup className='mt-4 bg-gray-100 border-border py-5'>
                            <InputGroupInput placeholder='Tìm kiếm' />
                            <InputGroupAddon>
                                <SearchIcon />
                            </InputGroupAddon>
                            <InputGroupAddon align='inline-end'></InputGroupAddon>
                        </InputGroup>
                        <SidebarGroup className='p-0 mt-4'>
                            <div className='flex justify-between'>
                                <Select>
                                    <SelectTrigger className='w-[170px] border-none outline-none shadow-none flex'>
                                        <span className='text-muted-foreground'>
                                            Sắp xếp:
                                        </span>
                                        <span className='text-blue-500 font-medium'>
                                            <SelectValue placeholder='Mới nhất' />
                                        </span>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value='Newest'>
                                                Mới nhất
                                            </SelectItem>
                                            <SelectItem value='Oddest'>
                                                Cũ nhất
                                            </SelectItem>
                                            <SelectItem value='recent'>
                                                Gần đây
                                            </SelectItem>
                                            <SelectItem value='group'>
                                                Nhóm
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <div className='flex gap-2'>
                                    <Dialog>
                                        <form>
                                            <DialogTrigger className='flex justify-center w-8'>
                                                <UserPlus />
                                            </DialogTrigger>

                                            <DialogContent className='sm:max-w-[425px]'>
                                                <DialogHeader>
                                                    <DialogTitle>
                                                        Thêm bạn bè
                                                    </DialogTitle>
                                                </DialogHeader>
                                                <div className='grid gap-4'>
                                                    <div className='grid gap-3'>
                                                        <Label htmlFor='username-1'>
                                                            Tên người dùng
                                                        </Label>
                                                        <Input
                                                            id='username-1'
                                                            name='username'
                                                            placeholder='Tên người dùng'
                                                        />
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant='outline'>
                                                            Hủy
                                                        </Button>
                                                    </DialogClose>
                                                    <Button type='submit'>
                                                        Tìm
                                                    </Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </form>
                                    </Dialog>

                                    <DialogGroupChat />
                                </div>
                            </div>
                        </SidebarGroup>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <ListConversation />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={currentUser} />
            </SidebarFooter>
        </Sidebar>
    );
}
