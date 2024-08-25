import { CheckCircledIcon } from '@radix-ui/react-icons';

type FormSuccessProps = {
  message?: string;
};

function FormSuccess({ message }: FormSuccessProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="flex items-center gap-x-2 text-emerald-500 rounded-md p-3 bg-emerald-500/15">
      <CheckCircledIcon className="w-4 h-4" />

      <p>{message}</p>
    </div>
  );
}

export default FormSuccess;