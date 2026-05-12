type Props = {
    label: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const FormInput = ({ label, type = "text", placeholder, value, onChange }: Props) => {
    return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      />
    </div>
    );
}

export default FormInput;