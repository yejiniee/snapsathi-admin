export default function Textarea({ id, name, value, onChange, ...props }) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-gray-300 p-3 text-sm font-normal text-gray-900 focus:border-[#5C73DB] focus:outline-none"
      rows={4}
      {...props}
    />
  );
}
