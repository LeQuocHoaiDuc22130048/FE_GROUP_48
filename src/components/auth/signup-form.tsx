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

export function SignupForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card className='overflow-hidden p-0 border-border'>
                <CardContent className='grid p-0 md:grid-cols-2 '>
                    <form className='p-6 md:p-8'>
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
                                <FieldLabel htmlFor='fullName'>
                                    Họ và tên
                                </FieldLabel>
                                <Input
                                    id='fullName'
                                    type='text'
                                    placeholder=' Họ và tên '
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor='email'>Email</FieldLabel>
                                <Input
                                    id='email'
                                    type='email'
                                    placeholder='Nhập email của bạn'
                                    required
                                />
                            </Field>
                            <Field>
                                <Field className='grid grid-cols-2 gap-4'>
                                    <Field>
                                        <FieldLabel htmlFor='password'>
                                            Mật khẩu
                                        </FieldLabel>
                                        <Input
                                            id='password'
                                            type='password'
                                            required
                                            placeholder='Nhập mật khẩu'
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
                                        />
                                    </Field>
                                </Field>
                            </Field>
                            <Field>
                                <Button type='submit'>Tạo tài khoản</Button>
                            </Field>

                            <FieldDescription className='text-center'>
                                Đã có tài khoản? <a href='/login'>Đăng nhập</a>
                            </FieldDescription>
                        </FieldGroup>
                    </form>
                    <div className='bg-muted relative hidden md:block'>
                        <img
                            src='/src/assets/banner_login.png'
                            alt='Image'
                            className='absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
