import React from 'react';
import classNames from 'classnames';
import SidebarChildren from './SidebarChildren';
import { Wrapper } from './style';

function SidebarContent({
  sidebarProps,
  active,
  options,
  handleTabClick,
  handleBackClick,
  ...properties
}: any) {
  if (active === '') return <></>;
  return (
    <Wrapper>
      <div {...sidebarProps}>
        <div className="sidebar-main-content">
          {active === undefined ? (
            <></>
          ) : (
            <>
              <div className="back-btn" onClick={handleBackClick} />
              {/* <MaterialIcon */}
              {/*  iconName="arrow_back_ios_new" */}
              {/*  iconColor={theme.color.white} */}
              {/*  fontSize="20px" */}
              {/* /> */}
              <span>{active}</span>
            </>
          )}
          <div className="sidebar-body">
            {options?.map((data: any) => (
              <ul key={data.name}>
                {data?.content?.map((list: any) => (
                  <div key={list.name} className="listItem">
                    {list.to && !list.children && !list.disabled ? (
                      <a href={list.to}>
                        {/* eslint-disable-next-line  */}
                        <li
                          className={classNames({ disabled: list.disabled })}
                          onClick={() => handleTabClick(list)}
                        >
                          <span className="flex-align-center">
                            {list.icon && list.icon}
                            <span>
                              {/*      ohne child */}
                              {list.name}
                            </span>
                          </span>
                          {/* <MaterialIcon */}
                          {/*  iconName="call_made" */}
                          {/*  iconColor={theme.color.blau2} */}
                          {/*  fontSize="30px" */}
                          {/* /> */}
                        </li>
                        {list.children && list.children(list)}
                      </a>
                    ) : (
                      <>
                        {/* eslint-disable-next-line  */}
                        <li
                          className={classNames({ disabled: list.disabled })}
                          onClick={() => handleTabClick(list)}
                        >
                          <span className="flex-align-center">
                            {list.icon && list.icon}
                            <span>
                              {/* mit child */}
                              {list.name}
                            </span>
                          </span>
                          {/* {list.children && ( */}
                          {/*  <MaterialIcon */}
                          {/*    iconName="navigate_next" */}
                          {/*    iconColor={theme.color.blau2} */}
                          {/*    fontSize="35px" */}
                          {/*  /> */}
                          {/* )} */}
                        </li>
                      </>
                    )}
                    {list?.children && (
                      <SidebarChildren
                        {...properties}
                        handleBackClick={handleBackClick}
                        handleTabClick={handleTabClick}
                        list={list}
                        active={active}
                      />
                    )}
                  </div>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default SidebarContent;
