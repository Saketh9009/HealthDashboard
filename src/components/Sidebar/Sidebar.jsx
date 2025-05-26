import React from 'react';
import { navLinks } from '../../data/navLinks';
import * as LucideIcons from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../../store/slices/uiSlice';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isSidebarOpen = useSelector((state) => state.ui.sidebarOpen);
  const dispatch = useDispatch();

  const generalLinks = navLinks.filter(link => [1,2,3,4,5,6].includes(link.id));
  const toolsLinks = navLinks.filter(link => [7,8].includes(link.id));
  const settingLink = navLinks.find(link => link.id === 9);
  const SettingIcon = settingLink ? LucideIcons[settingLink.icon] : null;

  // Close sidebar on mobile
  const closeSidebar = () => {
    if (window.innerWidth <= 900 && isSidebarOpen) {
      dispatch(toggleSidebar());
    }
  };

  return (
    <>
      <div className={`sidebar-overlay${isSidebarOpen ? ' open' : ''}`} onClick={closeSidebar} />
      <aside className={`sidebar-container${isSidebarOpen ? ' open' : ''}`}>
        <button className="close-button" onClick={closeSidebar} aria-label="Close sidebar">
          <LucideIcons.X size={22} />
        </button>
        <div className="sidebar-logo">
          Health<span>care.</span>
        </div>
        <div className="nav-section">
          <h2 className="section-title">General</h2>
          <ul className="nav-list">
            {generalLinks.map((link) => {
              const Icon = LucideIcons[link.icon];
              const isActive = currentPath === `/${link.title.toLowerCase()}`;
              return (
                <li className="nav-item" key={link.id}>
                  <Link
                    to={`/${link.title.toLowerCase()}`}
                    className={`nav-link${isActive ? ' active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={closeSidebar}
                  >
                    <Icon size={20} />
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-section">
          <h2 className="section-title">Tools</h2>
          <ul className="nav-list">
            {toolsLinks.map((link) => {
              const Icon = LucideIcons[link.icon];
              const isActive = currentPath === `/${link.title.toLowerCase()}`;
              return (
                <li className="nav-item" key={link.id}>
                  <Link
                    to={`/${link.title.toLowerCase()}`}
                    className={`nav-link${isActive ? ' active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={closeSidebar}
                  >
                    <Icon size={20} />
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="sidebar-spacer" />
        <div className="setting-section">
          <ul className="nav-list">
            {settingLink && (
              <li className="nav-item" key={settingLink.id}>
                <Link
                  to={`/${settingLink.title.toLowerCase()}`}
                  className={`nav-link${currentPath === `/${settingLink.title.toLowerCase()}` ? ' active' : ''}`}
                  aria-current={currentPath === `/${settingLink.title.toLowerCase()}` ? 'page' : undefined}
                  onClick={closeSidebar}
                >
                  {SettingIcon && <SettingIcon size={20} />}
                  {settingLink.title}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 