import axios, { AxiosError } from 'axios';

type ExceptionHandlerOptions = {
  onClientError?: (message: string, status: number, error: AxiosError) => void;
  onServerError?: (error: AxiosError) => void;
  onUnexpectedError?: (error: unknown) => void;
};

export const exceptionHandler = (error: unknown, { onClientError, onServerError, onUnexpectedError }: ExceptionHandlerOptions) => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const message = error.response?.data?.error || error.response?.data?.message || 'An error occurred';

    if (status && status >= 400 && status < 500) {
      onClientError?.(message, status, error);
    } else if (status && status >= 500) {
      onServerError?.(error);
    } else {
      onUnexpectedError?.(error);
    }
  } else {
    onUnexpectedError?.(error);
  }
};
