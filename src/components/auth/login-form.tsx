import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useAuth } from '@/context/auth-context';
import { Link, useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/hooks/use-toast';
import { exceptionHandler } from '@/lib/utils/exception-handler';

const formSchema = z
  .object({
    username_email: z.string().min(1, { message: 'Username atau email wajib diisi' }),
    password: z.string().min(4, { message: 'Password minimal 4 karakter' }),
  })
  .required({
    username_email: true,
    password: true,
  });

export function LoginForm() {
  const { loginUser } = useAuth();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username_email: undefined,
      password: undefined,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading(true);

      await loginUser(values.username_email, values.password);

      toast({
        variant: 'success',
        duration: 3000,
        title: 'Login Berhasil!',
        description: 'Anda berhasil login ke akun Anda.',
      });

      navigate('/dashboard/pju');
    } catch (error) {
      exceptionHandler(error, {
        onClientError: (message) => {
          toast({
            variant: 'destructive',
            duration: 3000,
            title: 'Login Gagal!',
            description: message,
          });
        },
        onServerError: () => {
          toast({
            variant: 'destructive',
            duration: 3000,
            title: 'Terjadi Kesalahan!',
            description: 'Internal server error. Coba lagi nanti.',
          });
        },
        onUnexpectedError: () => {
          toast({
            variant: 'destructive',
            duration: 3000,
            title: 'Terjadi Kesalahan!',
            description: 'Error tidak diketahui. Coba lagi nanti.',
          });
        },
      });
    } finally {
      setLoading(false);
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
              name='username_email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username atau Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='username123 atau user@gmail.com'
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
              disabled={loading}
            >
              {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
              Masuk
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Link
          to='/'
          className='text-sm underline text-primary hover:text-blue-400'
        >
          Kembali ke beranda
        </Link>
      </CardFooter>
    </Card>
  );
}
