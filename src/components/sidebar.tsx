import React, { useState } from 'react';
import classNames from 'classnames';
import SidebarContent from './SidebarContent';
import { Wrapper } from './style';

function Sidebar(properties: any) {
  const { open, wrapperClassName, options } = properties;
  const [active, setActiveTab] = useState<string[]>([]);
  const [list, setList] = useState<any>(options);
  const [previousList] = useState<string[]>([]);

  const handleBackdropClick = () => {
    const { onToggle, onClose } = properties;
    onToggle(false);
    onClose && onClose();
    setTimeout(() => {
      setActiveTab([]);
      setList(options);
    }, 500);
  };

  const handleTabClick = (tabData: any) => {
    if (tabData.disabled) {
      return;
    }
    if (tabData.children) {
      active.push(tabData.id);
      previousList.push(tabData.children);
      setActiveTab(active);
      setList(tabData.children);
    }
  };

  const handleBackClick = () => {
    active.pop();
    previousList.pop();
    if (active.length > 0) {
      setActiveTab([...active]);
      setList(previousList[previousList.length - 1]);
    } else {
      setActiveTab([]);
      setList(options);
    }
  };
  return (
    <Wrapper>
      <div id="react-sidebar" className="slidebar">
        <div
          className={classNames('sidebar-backdrop', { show: open })}
          onClick={() => handleBackdropClick()}
        />
        <SidebarContent
          {...properties}
          sidebarProps={{
            id: 'sidebar-parent',
            className: classNames('sidebar-main', {
              show: open,
              [wrapperClassName]: wrapperClassName,
            }),
          }}
          options={list}
          active={active[active.length - 1]}
          list={list}
          handleTabClick={handleTabClick}
          handleBackClick={handleBackClick}
        />
      </div>
    </Wrapper>
  );
}

export default Sidebar;
