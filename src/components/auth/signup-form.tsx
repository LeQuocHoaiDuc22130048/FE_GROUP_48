import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';

export function SignupForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!username || !password || confirmPassword !== password) {
            toast.warning('Vui lòng điền đầy đủ thông tin đăng ký hợp lệ!');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Mật khẩu và xác nhận mật khẩu không khớp!');
            return;
        }
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card className='overflow-hidden p-0 border-border'>
                <CardContent className='grid p-0 md:grid-cols-2 '>
                    <form className='p-6 md:p-8' onSubmit={onSubmit}>
                        <div className='flex flex-col items-center text-center gap-2'>
                            <a
                                href='/'
                                className='mx-auto block w-fit text-center'
                            >
                                <img src='/logo.svg' alt='logo' width={100} />
                            </a>
                        </div>
                        <FieldGroup>
                            <div className='flex flex-col items-center gap-2 text-center'>
                                <h1 className='text-2xl font-bold uppercase'>
                                    đăng ký
                                </h1>
                                <p className='text-muted-foreground text-sm text-balance'>
                                    Nhập email của bạn bên dưới để tạo tài khoản
                                    của bạn
                                </p>
                            </div>
                            <Field>
                                <FieldLabel htmlFor='username'>
                                    Tên đăng nhập
                                </FieldLabel>
                                <Input
                                    id='username'
                                    type='text'
                                    placeholder=' Nhập tên đăng nhập của bạn'
                                    required
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor='password'>
                                    Mật khẩu
                                </FieldLabel>
                                <Input
                                    id='password'
                                    type='password'
                                    required
                                    placeholder='Nhập mật khẩu'
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor='confirm-password'>
                                    Xác nhận mật khẩu
                                </FieldLabel>
                                <Input
                                    id='confirm-password'
                                    type='password'
                                    required
                                    placeholder='Xác nhận mật khẩu'
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                />
                            </Field>
                            <Field>
                                <Button type='submit' disabled={loading}>
                                    {loading
                                        ? 'Đang tạo tài khoản...'
                                        : 'Tạo tài khoản'}
                                </Button>
                            </Field>

                            <FieldDescription className='text-center'>
                                Đã có tài khoản? <a href='/login'>Đăng nhập</a>
                            </FieldDescription>
                        </FieldGroup>
                    </form>
                    <div className='bg-muted relative hidden md:block'>
                        <img
                            src='/src/assets/images/banner_login.png'
                            alt='Image'
                            className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
