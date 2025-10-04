import React from 'react';
import AppMenu from './AppMenu';
import { getMenuItems } from '../../../../helpers/Manu';
import SimplebarReactClient from '../../wrapper/SimplebarReactClient';
import LogoBox from '../../wrapper/LogoBox';

const VerticalNavigationBar = () => {
  const menuItems = getMenuItems();
  
  return (
    <div className="app-sidebar">
      <LogoBox />
      <SimplebarReactClient className="scrollbar" data-simplebar>
        <AppMenu menuItems={menuItems} />
      </SimplebarReactClient>
    </div>
  );
};

export default VerticalNavigationBar;