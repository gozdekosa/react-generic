type Props =
  React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
  };


const FormInput = ({ label,error, ...props }: Props) => {
    return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-100 mb-1">
        {label}
      </label>

      <input
        {...props}
        className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 dark:text-gray-100 placeholder-gray-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
    );
}

export default FormInput;