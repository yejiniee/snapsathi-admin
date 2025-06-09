import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import useRedirectIfUnauthenticated from "@hooks/useRedirectIfUnauthenticated";
import InquiryContent from "../components/InquiryContent";

export default function ReservationInquiryPage() {
  useRedirectIfUnauthenticated();

  return (
    <div className="flex h-full flex-1 flex-row bg-gray-50">
      <Sidebar />

      <div className="flex min-h-screen w-full flex-col">
        <Header title="고객 문의 관리" />
        <main className="flex flex-col gap-5 px-10 py-5">
          <h1 className="text-[2rem] font-semibold text-black">
            고객 문의 관리
          </h1>

          <InquiryContent />
        </main>
      </div>
    </div>
  );
}
