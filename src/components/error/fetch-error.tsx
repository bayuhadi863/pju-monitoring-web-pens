import { AlertCircle } from 'lucide-react';

const FetchError = () => {
    return (
        <div className='flex justify-center items-center h-full'>
            <AlertCircle className='h-6 w-6 text-destructive' />
            <span className='ml-2 text-destructive'>There was an error fetching data.</span>
        </div>
    );
};

export default FetchError;
