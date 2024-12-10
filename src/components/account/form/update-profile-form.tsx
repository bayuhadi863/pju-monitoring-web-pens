import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { UpdateProfileRequest } from "@/lib/types/request/profile/update-profile-request";
import { useToast } from "../../hooks/use-toast";
import useProfileManagementStore from "@/stores/profile-management-store";
import { updateProfile } from "@/lib/services/profile-service";
import { exceptionHandler } from "@/lib/utils/exception-handler";
import FetchLoading from "../../loader/fetch-loading";
import FetchError from "../../error/fetch-error";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export const UpdateForm: React.FC = () => {
  const { toast } = useToast();
  const { fetchProfile, fetchProfileError, fetchProfileLoading, profile } = useProfileManagementStore((state) => state);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  const form = useForm<UpdateProfileRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: profile?.name || "", 
      username: profile?.username || "", 
      email: profile?.email || "", 
    },
  });

  useEffect(() => {
    if (profile) {
      form.reset({
        name: profile.name || "",
        username: profile.username || "",
        email: profile.email || "",
      });
    }
  }, [profile, form]);


  const onSubmit = async (data: UpdateProfileRequest) => {
    try {
      await updateProfile(data);

      toast({
        variant: "success",
        duration: 3000,
        title: "Success!",
        description: "Profile updated successfully.",
      });

    } catch (error) {
      exceptionHandler(error, {
        onClientError: (message) => {
          toast({
            variant: "destructive",
            duration: 3000,
            title: "Gagal!",
            description: message,
          });
        },
        onServerError: () => {
          toast({
            variant: "destructive",
            duration: 3000,
            title: "Terjadi Kesalahan!",
            description: "Internal server error. Coba lagi nanti.",
          });
        },
        onUnexpectedError: () => {
          toast({
            variant: "destructive",
            duration: 3000,
            title: "Terjadi Kesalahan!",
            description: "Error tidak diketahui. Coba lagi nanti.",
          });
        },
      });
    }
  };

  return (

    <>
      {
        fetchProfileLoading ? (
          <FetchLoading />
        ) : fetchProfileError ? (
          <FetchError />
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Username Field */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="m@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <Button className="mt-4 text-white" type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                      Sedang memperbarui...
                    </>
                  ) : (
                    'Perbarui Profile'
                  )}
                </Button>
              </div>

            </form>
          </Form>
        )
      }
    </>

  );
};

export default UpdateForm;
