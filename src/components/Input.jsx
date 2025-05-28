export default function Input({ id, name, type, value, onChange, ...props }) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-gray-300 p-3 text-sm font-normal text-gray-900 focus:border-[#5C73DB] focus:outline-none"
      {...props}
    />
  );
}
