import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Loader2 } from 'lucide-react';
import useUserManagementStore from '@/stores/user-management-store';
import { updateUser } from '@/lib/services/user-service';
import { useToast } from '@/components/hooks/use-toast';
import { exceptionHandler } from '@/lib/utils/exception-handler';
import { useEffect } from 'react';
import { UpdateUserRequest } from '@/lib/types/request/user-management/update-user-request';
import FetchLoading from '@/components/loader/fetch-loading';
import FetchError from '@/components/error/fetch-error';

const formSchema = z
    .object({
        name: z.string().min(2, { message: 'Nama harus memiliki minimal 2 karakter.' }),
        username: z.string().min(3, { message: 'Username harus memiliki minimal 3 karakter.' }),
        email: z.string().email({ message: 'Silakan masukkan alamat email yang valid.' }),
        password: z.string().min(8, { message: 'Password harus memiliki minimal 8 karakter.' }).optional().or(z.undefined()),
        confirm_password: z.string().optional(),
        role_code: z.enum(['admin', 'operator'], { required_error: 'Silakan pilih peran.' }),
    })
    .refine(
        (data) => {
            if (data.password || data.confirm_password) {
                return data.password === data.confirm_password;
            }
            return true;
        },
        {
            message: 'Konfirmasi password tidak cocok.',
            path: ['confirm_password'],
        }
    );

interface UpdateUserForm {
    userId: number;
}

export default function UpdateUserForm({ userId }: UpdateUserForm) {
    const { toast } = useToast();
    const { setUpdateUserDialogOpen, getSingleUser, singleUser, getSingleUserLoading, getSingleUserError, setListNeedRefresh } = useUserManagementStore((state) => state);

    useEffect(() => {
        getSingleUser(userId);
    }, [userId, getSingleUser]);

    const form = useForm<UpdateUserRequest>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: undefined,
            confirm_password: undefined,
            role_code: undefined,
        },
    });

    const { reset } = form;

    useEffect(() => {
        if (singleUser) {
            reset({
                name: singleUser.name || '',
                username: singleUser.username || '',
                email: singleUser.email || '',
                password: undefined,
                confirm_password: undefined,
                role_code: singleUser.role_code || undefined,
            });
        }
    }, [singleUser, reset]);

    const onSubmit = async (values: UpdateUserRequest) => {
        try {
            await updateUser(userId, values);

            toast({
                variant: 'success',
                duration: 3000,
                title: 'Berhasil!',
                description: 'User berhasil diperbarui.',
            });

            setUpdateUserDialogOpen(false);
            setListNeedRefresh(true);
        } catch (error) {
            exceptionHandler(error, {
                onClientError: (message) => {
                    toast({
                        variant: 'destructive',
                        duration: 3000,
                        title: 'Gagal!',
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
                    console.error('Unexpected error:', error);
                    toast({
                        variant: 'destructive',
                        duration: 3000,
                        title: 'Terjadi Kesalahan!',
                        description: 'Error tidak diketahui. Coba lagi nanti.',
                    });
                },
            });
        }
    };

    return (
        <>
            {getSingleUserLoading ? (
                <FetchLoading />
            ) : getSingleUserError ? (
                <FetchError />
            ) : (
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4'
                    >
                        <FormField
                            control={form.control}
                            name='name'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nama</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='John Doe'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='username'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder='johndoe'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='email'
                                            placeholder='john@example.com'
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
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='password'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='confirm_password'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Konfirmasi Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            type='password'
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name='role_code'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className='flex flex-col space-y-1'
                                        >
                                            <FormItem className='flex items-center space-x-3 space-y-0'>
                                                <FormControl>
                                                    <RadioGroupItem value='admin' />
                                                </FormControl>
                                                <FormLabel className='font-normal'>Administrator</FormLabel>
                                            </FormItem>
                                            <FormItem className='flex items-center space-x-3 space-y-0'>
                                                <FormControl>
                                                    <RadioGroupItem value='operator' />
                                                </FormControl>
                                                <FormLabel className='font-normal'>Operator</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type='submit'
                            className='w-full'
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting ? (
                                <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                    Submitting...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </Button>
                    </form>
                </Form>
            )}
        </>
    );
}
