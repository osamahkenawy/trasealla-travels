import DropDown from './DropDown';
import { Link } from "react-router";
import { useLanguage } from '../../contexts/LanguageContext';

export default function Nav({ setMobileToggle }) {
  const { locale, t } = useLanguage();
  
  // Helper function to create localized paths
  const getLocalizedPath = (path) => {
    if (locale === 'en') {
      return path;
    }
    return `/${locale}${path}`;
  };

  return (
    <ul className="cs_nav_list fw-medium">
      

      <li>
        <Link to={getLocalizedPath('/about')} onClick={() => setMobileToggle(false)}>
          {t('nav.aboutUs')}
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link to={getLocalizedPath('/destination')} onClick={() => setMobileToggle(false)}>
          {t('nav.destination')}
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to={getLocalizedPath('/destination')} onClick={() => setMobileToggle(false)}>
                {t('nav.destination')}
              </Link>
            </li>
            <li>
              <Link to={getLocalizedPath('/destination/destination-details')} onClick={() => setMobileToggle(false)}>
                {t('nav.destinationDetails')}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to={getLocalizedPath('/tour')} onClick={() => setMobileToggle(false)}>
          {t('nav.tour')}
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to={getLocalizedPath('/tour')} onClick={() => setMobileToggle(false)}>
                {t('nav.tour')}
              </Link>
            </li>          
            <li>
              <Link to={getLocalizedPath('/tour/tour-details')} onClick={() => setMobileToggle(false)}>
                {t('nav.tourDetails')}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> 
      
      <li className="menu-item-has-children">
        <Link to="#">{t('nav.pages')}</Link>
        <DropDown>
          <ul>
            <li>
              <Link to={getLocalizedPath('/activities')} onClick={() => setMobileToggle(false)}>
                {t('nav.activities')}
              </Link>
            </li> 
            <li>
              <Link to={getLocalizedPath('/activities/activities-details')} onClick={() => setMobileToggle(false)}>
                {t('nav.activitiesDetails')}
              </Link>
            </li>             
            <li>
              <Link to={getLocalizedPath('/team')} onClick={() => setMobileToggle(false)}>
                {t('nav.ourTeam')}
              </Link>
            </li>            
            <li>
              <Link to={getLocalizedPath('/team/team-details')} onClick={() => setMobileToggle(false)}>
                {t('nav.teamDetails')}
              </Link>
            </li>             
            <li>
              <Link to={getLocalizedPath('/faq')} onClick={() => setMobileToggle(false)}>
                Our Faq
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>        

      <li className="menu-item-has-children">
        <Link to={getLocalizedPath('/blog')} onClick={() => setMobileToggle(false)}>
          {t('nav.blog')}
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to={getLocalizedPath('/blog')} onClick={() => setMobileToggle(false)}>
                {t('nav.blog')}
              </Link>
            </li>
            <li>
              <Link to={getLocalizedPath('/blog-sidebar')} onClick={() => setMobileToggle(false)}>
                {t('nav.blogWithSidebar')}
              </Link>
            </li>                         
            <li>
              <Link
                to={getLocalizedPath('/blog/blog-details')}
                onClick={() => setMobileToggle(false)}
              >
                {t('nav.blogDetails')}
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to={getLocalizedPath('/contact')} onClick={() => setMobileToggle(false)}>
          {t('nav.contact')}
        </Link>
      </li>
    </ul>
  );
}
