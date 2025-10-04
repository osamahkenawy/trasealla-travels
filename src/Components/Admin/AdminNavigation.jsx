import React from 'react';
import { MENU_ITEMS } from '../../data/menu-items';

const AdminNavigation = () => {
  const renderMenuItem = (item, index) => {
    if (item.isTitle) {
      return (
        <li key={index} className="menu-title">
          {item.label}
        </li>
      );
    }

    if (item.children) {
      return (
        <li key={index}>
          <a href="#" className="has-arrow waves-effect">
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </a>
          <ul className="sub-menu" aria-expanded="false">
            {item.children.map((child, childIndex) => (
              <li key={childIndex}>
                <a href={child.url}>{child.label}</a>
              </li>
            ))}
          </ul>
        </li>
      );
    }

    return (
      <li key={index}>
        <a href={item.url} className="waves-effect">
          <i className={item.icon}></i>
          <span>{item.label}</span>
          {item.badge && (
            <span className={`badge bg-${item.badge.variant} ms-1`}>
              {item.badge.text}
            </span>
          )}
        </a>
      </li>
    );
  };

  return (
    <div id="sidebar-menu">
      <ul className="metismenu list-unstyled" id="side-menu">
        {MENU_ITEMS.map((item, index) => renderMenuItem(item, index))}
      </ul>
    </div>
  );
};

export default AdminNavigation;
