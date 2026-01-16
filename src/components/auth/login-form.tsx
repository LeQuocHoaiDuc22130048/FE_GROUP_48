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
import { Label } from '@radix-ui/react-label';
import { Checkbox } from '../ui/checkbox';
// import { useNavigate } from 'react-router';
import socketClient, { login } from '@/socket/socketClient';
import { useEffect } from 'react';

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    // const navigate = useNavigate();

    useEffect(() => {
        const handleMessage = (data: any) => {
            console.log("Socket Message (Login):", data);
            if (data.event === "RE_LOGIN" && data.status === "success") {
                const reLoginCode = data.data?.RE_LOGIN_CODE;
                console.log("RE_LOGIN_CODE:", reLoginCode);
                // navigate('/chat'); // Uncomment if navigation is desired on success
            }
        };

        socketClient.onMessage(handleMessage);

        return () => {
            socketClient.offMessage(handleMessage);
        };
    }, []);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const password = (document.getElementById('password') as HTMLInputElement).value;

        console.log("Logging in with:", email, password);
        login(email, password);
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card className='overflow-hidden p-0 border-border'>
                <CardContent className='grid p-0 md:grid-cols-2'>
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
                                <h1 className='text-2xl font-bold'>
                                    Chào mừng bạn trở lại!
                                </h1>
                                <p className='text-muted-foreground text-balance'>
                                    Đăng nhập vào tài khoản của bạn
                                </p>
                            </div>
                            <Field>
                                <FieldLabel htmlFor='email'>Email</FieldLabel>
                                <Input
                                    id='email'
                                    type='text'
                                    placeholder='Nhập email của bạn'
                                    required
                                />
                            </Field>
                            <Field>
                                <div className='flex items-center'>
                                    <FieldLabel htmlFor='password'>
                                        Mật khẩu
                                    </FieldLabel>
                                </div>
                                <Input
                                    id='password'
                                    type='password'
                                    required
                                    placeholder='Nhập mật khẩu'
                                />
                            </Field>
                            <Field>
                                <div className='flex flex-col gap-6'>
                                    <div className='flex items-center gap-3'>
                                        <Checkbox
                                            id='terms'
                                            className='border-accent'
                                        />
                                        <Label htmlFor='terms'>
                                            Nhớ mật khẩu
                                        </Label>
                                    </div>
                                </div>
                            </Field>
                            <Field>
                                <Button type='submit'>
                                    Đăng nhập
                                </Button>
                            </Field>

                            <FieldDescription className='text-center'>
                                Bạn chưa có tài khoản?{' '}
                                <a href='/register'>Đăng ký</a>
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
