export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
  err_code: number | null;
};
