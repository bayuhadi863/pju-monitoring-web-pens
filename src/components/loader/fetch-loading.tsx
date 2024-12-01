import { Loader2 } from 'lucide-react';

const FetchLoading = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <Loader2 className='h-6 w-6 text-primary animate-spin' />
            <span className='ml-2 text-muted-foreground'>Loading...</span>
        </div>
    );
};

export default FetchLoading;
