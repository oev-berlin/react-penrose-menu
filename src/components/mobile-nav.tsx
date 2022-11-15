import React, { useCallback, useState } from 'react';
import Sidebar from './sidebar';
import { Wrapper, Navbar } from './style';
import { INavigation } from '~/components/interface';

interface TopMobileMenuProperties {
  data: INavigation;
}

export function MobileNav({ data }: TopMobileMenuProperties) {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleSidebarToggle = () => {
    setOpen((current) => !current);
  };

  const content = useCallback(
    () =>
      data?.menu?.map((menuItem) =>
        menuItem.children.length > 0
          ? {
              id: menuItem.name,
              name: menuItem.name,
              icon: <i className="fa fa-chrome" />,
              children: menuItem.children,
            }
          : {
              id: menuItem.name,
              name: menuItem.name,
              to: menuItem.pageSlug,
              icon: <i className="fa fa-chrome" />,
            }
      ),
    []
  );

  const options = [
    {
      hideBorder: true,
      content: content(),
    },
  ];

  return (
    <Wrapper>
      <Sidebar open={isOpen} onToggle={handleSidebarToggle} options={options} />
      <Navbar>
        <div onClick={handleSidebarToggle}>muss neu gebaut werden :flex:</div>
      </Navbar>
    </Wrapper>
  );
}
