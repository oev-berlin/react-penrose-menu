import classNames from 'classnames';
import React from 'react';
import SidebarContent from './SidebarContent';
import {
  Wrapper,
} from './style';

function SidebarChildren(list: any, handleBackClick:any, handleTabClick: any, ...props: any) {
  // eslint-disable-next-line react/prop-types
  const { wrapperClassName } = props;
  const { activeTab } = list;
  const { id, children } = list;

  return (
    <Wrapper>
      <SidebarContent
        {...props}
        sidebarProps={{
          className: classNames('sidebar-main second', {
            show: activeTab?.includes(id),
            [wrapperClassName]: wrapperClassName,
          }),
        }}
        options={children}
        handleTabClick={handleTabClick}
        handleBackClick={handleBackClick}
      />
    </Wrapper>
  );
}

export default SidebarChildren;
