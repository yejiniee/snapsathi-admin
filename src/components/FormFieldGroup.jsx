// 라디오 버튼, 체크박스 등 여러 input 그룹용
export default function FormFieldGroup({ title, children }) {
  return (
    <fieldset>
      <legend className="mb-2 text-base font-medium text-black">{title}</legend>
      {children}
    </fieldset>
  );
}
