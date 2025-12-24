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

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card className='overflow-hidden p-0 border-border'>
                <CardContent className='grid p-0 md:grid-cols-2'>
                    <form className='p-6 md:p-8'>
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
                                    type='email'
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
                                <Button type='submit'>Đăng nhập</Button>
                            </Field>

                            <FieldDescription className='text-center'>
                                Bạn chưa có tài khoản?{' '}
                                <a href='/register'>Đăng ký</a>
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
