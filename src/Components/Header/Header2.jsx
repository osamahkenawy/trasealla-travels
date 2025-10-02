import { useEffect, useState } from 'react';
import { Link } from "react-router";
import Nav from './Nav';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Header2({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [searchToggle, setSearchToggle] = useState(false);
  const { locale } = useLanguage();
  
  // Helper function to create localized paths
  const getLocalizedPath = (path) => {
    if (locale === 'en') {
      return path;
    }
    return `/${locale}${path}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);

  return (
    <div>
    <header
      className={`cs_site_header header_style_2 header_style_2_1 cs_style_1 header_sticky_style1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_main_header">
        <div className="container-fluid"> 
          <div className="cs_main_header_in">
            {/* Swap left and right sections for RTL */}
            {locale === 'ar' ? (
              <>
                {/* Header buttons on the left for RTL */}
                <div className="cs_main_header_left">
                  <div className="header-btn d-flex align-items-center">
                    <div className="main-button header-btn-1">
                      <LanguageSwitcher />
                      <Link to={getLocalizedPath('/contact')} className='theme-btn'>
                        <span> Request A Quote <i className="bi bi-arrow-right"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Navigation in center */}
                <div className="cs_main_header_center">
                  <div className="cs_nav cs_primary_font fw-medium">
                    <span
                      className={
                        mobileToggle
                          ? 'cs-munu_toggle cs_teggle_active'
                          : 'cs-munu_toggle'
                      }
                      onClick={() => setMobileToggle(!mobileToggle)}
                    >
                      <span></span>
                    </span>
                    <Nav setMobileToggle={setMobileToggle} />
                  </div>
                </div>
                {/* Logo on the right for RTL */}
                <div className="cs_main_header_right">
                  <Link className="cs_site_branding" to={getLocalizedPath('/')}>
                    <img src="/assets/img/logo/2.png" alt="Logo" />
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* Logo on the left for LTR */}
                <div className="cs_main_header_left">
                  <Link className="cs_site_branding" to={getLocalizedPath('/')}>
                    <img src="/assets/img/logo/2.png" alt="Logo" />
                  </Link>
                </div>
                {/* Navigation in center */}
                <div className="cs_main_header_center">
                  <div className="cs_nav cs_primary_font fw-medium">
                    <span
                      className={
                        mobileToggle
                          ? 'cs-munu_toggle cs_teggle_active'
                          : 'cs-munu_toggle'
                      }
                      onClick={() => setMobileToggle(!mobileToggle)}
                    >
                      <span></span>
                    </span>
                    <Nav setMobileToggle={setMobileToggle} />
                  </div>
                </div>
                {/* Header buttons on the right for LTR */}
                <div className="cs_main_header_right">
                  <div className="header-btn d-flex align-items-center">
                    <div className="main-button header-btn-1">
                      <a onClick={() => setSearchToggle(!searchToggle)} className="search-trigger search-icon">
                        <i className="bi bi-search"></i>
                      </a>
                      <LanguageSwitcher />
                      <Link to={getLocalizedPath('/contact')} className='theme-btn'>
                        <span> Request A Quote <i className="bi bi-arrow-right"></i></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>

    <div className={`search-wrap ${searchToggle ? 'active' : ''}`}>
            <div className="search-inner">
            <i onClick={() => setSearchToggle(!searchToggle)} id="search-close" className="bi bi-x-lg search-close"></i>
                <div className="search-cell">
                    <form method="get">
                        <div className="search-field-holder">
                            <input type="search" className="main-search-input" placeholder="Search..." />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>

  );
}
