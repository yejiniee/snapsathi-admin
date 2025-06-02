import { useState } from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import TabMenu from "../../../components/Tab/TabMenu";
import useRedirectIfUnauthenticated from "../../../hooks/useRedirectIfUnauthenticated";
import ReservationContent from "../components/ReservationContent";
import { TABS } from "../constants/reservation";

export default function ReservationPage() {
  useRedirectIfUnauthenticated();

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />

      <div className="flex flex-grow flex-col">
        <Header title="예약 관리" />
        <main className="flex flex-col gap-5 px-10 pt-5">
          <h1 className="text-[2rem] font-semibold text-black">예약 관리</h1>
          <TabMenu
            tabs={TABS}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
          />

          <ReservationContent
            selectedTabTitle={TABS[selectedIndex].title}
            selectedTabLabel={TABS[selectedIndex].label}
          />
        </main>
      </div>
    </div>
  );
}
