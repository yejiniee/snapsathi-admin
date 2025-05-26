import TabItem from "./TabItem";

export default function TabMenu({ tabs, selectedIndex, onSelect }) {
  return (
    <nav
      role="tablist"
      aria-label="예약 관리 탭"
      className="flex flex-col items-start gap-1"
    >
      <ul className="flex flex-row items-start gap-3">
        {tabs.map((tab, index) => (
          <TabItem
            key={tab.label}
            label={tab.label}
            title={tab.title}
            isSelected={selectedIndex === index}
            onClick={() => onSelect(index)}
          />
        ))}
      </ul>
      <div className="h-[2px] w-full rounded-md bg-gray-300" />
    </nav>
  );
}
