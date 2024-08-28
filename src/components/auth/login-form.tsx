import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { login } from '@/lib/services/auth-service';
import { Link } from 'react-router-dom';

const formSchema = z
  .object({
    email: z.string().email({ message: 'Email tidak valid' }),
    password: z.string().min(4, { message: 'Password minimal 4 karakter' }),
  })
  .required({
    email: true,
    password: true,
  });

export function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: undefined,
      password: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const response = await login(values.email, values.password);
    if (response.status === 200) {
      console.log('Login success:', response.data);
    } else {
      console.error('Login failed:', response.data);
    }
  };

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl font-bold text-center'>Login</CardTitle>
        <CardDescription>Masukkan email Anda di bawah ini untuk login ke akun Anda. Hanya akun yang dibuat oleh admin yang bisa melakukan login.</CardDescription>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='m@example.com'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='mt-4'>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className='relative'>
                      <Input
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder='•••••••••'
                        {...field}
                      />
                      <button
                        type='button'
                        onClick={togglePasswordVisibility}
                        className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500'
                      >
                        {passwordVisible ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className='w-full mt-6'
              type='submit'
            >
              Masuk
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Link to='/' className='text-sm underline text-primary hover:text-blue-400'>Kembali ke beranda</Link>
      </CardFooter>
    </Card>
  );
}
