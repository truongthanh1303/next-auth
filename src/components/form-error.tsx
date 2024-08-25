import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
// import { TriangleAlert } from 'lucide-react';

type FormErrorProps = {
  message?: string;
};

function FormError({ message }: FormErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-2 text-destructive rounded-md p-3 bg-destructive/15">
      <ExclamationTriangleIcon className="w-4 h-4" />
      {/* <TriangleAlert className="w-4 h-4" /> */}

      <p>{message}</p>
    </div>
  );
}

export default FormError;