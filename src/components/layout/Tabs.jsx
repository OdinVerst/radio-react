import React, { useEffect, useRef, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export const Tabs = ({ names, changeTab }) => {
  const [tabsEvent, setTabsEvent] = useState();
  const tabsWrapper = useRef();
  useEffect(() => {
    const init = M.Tabs.init(tabsWrapper.current)
     setTabsEvent(init);
  }, []);
  const allNames = ["all", ...names];
  const activeTab = 0;

  const clickHandler = () => {
    changeTab(allNames[tabsEvent.index]);
  };

  return (
    <ul className="tabs" ref={tabsWrapper}>
      {allNames.map((item, index) => (
        <li key={index} className="tab">
          <a
            onClick={clickHandler}
            className={index === activeTab ? "active" : ""}
            href={`#${item}`}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
