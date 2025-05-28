export default function FormField({ label, children, htmlFor }) {
  return (
    <div className="flex flex-shrink-0 flex-grow basis-0 flex-col items-start gap-2">
      <label htmlFor={htmlFor} className="text-base font-medium text-black">
        {label}
      </label>
      {children}
    </div>
  );
}
