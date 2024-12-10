import React, { useState } from "react";
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
import { UpdatePasswordRequest } from "@/lib/types/request/profile/update-password-request";
import { useToast } from "../../hooks/use-toast";
import { updatePassword } from "@/lib/services/profile-service";
import { exceptionHandler } from "@/lib/utils/exception-handler";
import { Loader2 } from "lucide-react";

const formSchema = z
  .object({
    old_password: z.string().min(1, { message: "Kata sandi lama diperlukan" }),
    new_password: z
      .string()
      .min(6, { message: "Kata sandi baru harus terdiri dari minimal 6 karakter" }),
    confirm_password: z.string(),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Kata sandi tidak cocok",
    path: ["confirm_password"], // Sorot field confirm_password jika terjadi kesalahan
  });

export const UpdatePasswordForm: React.FC = () => {
  const { toast } = useToast();
  const [passwordVisible, setPasswordVisible] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field: "old" | "new" | "confirm") => {
    setPasswordVisible((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const form = useForm<UpdatePasswordRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      old_password: "",
      new_password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (data: UpdatePasswordRequest) => {
    try {
      await updatePassword(data);

      toast({
        variant: "success",
        duration: 3000,
        title: "Berhasil!",
        description: "Kata sandi berhasil diperbarui.",
      });

      form.reset();
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
            title: "Kesalahan!",
            description: "Kesalahan server internal. Silakan coba lagi nanti.",
          });
        },
        onUnexpectedError: () => {
          toast({
            variant: "destructive",
            duration: 3000,
            title: "Kesalahan!",
            description: "Terjadi kesalahan yang tidak terduga. Silakan coba lagi nanti.",
          });
        },
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Old Password */}
        <FormField
          control={form.control}
          name="old_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kata Sandi Lama</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={passwordVisible.old ? "text" : "password"}
                    placeholder="Masukkan kata sandi lama"
                    {...field}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("old")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  >
                    {passwordVisible.old ? "🙈" : "👁️"}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* New Password */}
        <FormField
          control={form.control}
          name="new_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kata Sandi Baru</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={passwordVisible.new ? "text" : "password"}
                    placeholder="Masukkan kata sandi baru"
                    {...field}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("new")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  >
                    {passwordVisible.new ? "🙈" : "👁️"}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Konfirmasi Kata Sandi</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={passwordVisible.confirm ? "text" : "password"}
                    placeholder="Konfirmasi kata sandi baru"
                    {...field}
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("confirm")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  >
                    {passwordVisible.confirm ? "🙈" : "👁️"}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div>
          <Button className="mt-4 text-white" type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Submitting...
              </>
            ) : (
              'Perbarui Kata Sandi'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdatePasswordForm;
