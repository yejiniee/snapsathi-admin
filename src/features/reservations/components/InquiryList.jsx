import InquiryItem from "./InquiryItem";

export default function InquiryList({ inquiryData }) {
  return (
    <>
      {inquiryData.map((inquiry) => (
        <InquiryItem key={inquiry.id} inquiry={inquiry} />
      ))}
    </>
  );
}
