import React, { useEffect, useRef, useState } from "react";

export type TabProps = {
  title: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabProps[];
  onChange: (index: number) => void;
};

const TabComponent: React.FC<TabsProps> = ({ tabs, onChange }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const activeTabRef = tabsRef.current[activeTab];
    onChange(activeTab);
    if (activeTabRef) {
      const { offsetLeft, clientWidth } = activeTabRef;
      setSliderStyle({
        left: offsetLeft,
        width: clientWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col w-full ">
      <ul className="relative flex w-full gap-2 border-b-2 border-white border-solid">
        {tabs.map((tab, index) => (
          <li
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            onClick={() => setActiveTab(index)}
            style={{
              cursor: "pointer",
              padding: "10px",
              borderBottom: "2px solid transparent",
              color: activeTab === index ? "#990100" : "#475367",
            }}
          >
            {tab.title}
          </li>
        ))}
        <div
          className="absolute bottom-[-3px] h-[2px] transition-all duration-300 bg-primary-500"
          style={{ ...sliderStyle }}
        ></div>
      </ul>
      <div className="mt-4">{tabs[activeTab].content}</div>
    </div>
  );
};

export default TabComponent;
