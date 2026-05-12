type Props = {
    label: string;
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const FormCheckbox = ({ checked, onChange, label }: Props) => {
    return (
        <label className="flex items-center text-gray-600">
              <input type="checkbox" checked={checked} onChange={onChange} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              <span className="ml-2">{label}</span>
        </label>
    )
};

export default FormCheckbox;