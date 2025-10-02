import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import { Link } from "react-router";
import { useLanguage } from "../../contexts/LanguageContext";

const BreadCumb = ({Title,bgimg}) => {
    const { locale, t } = useLanguage();
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    // Helper function to create localized paths
    const getLocalizedPath = (path) => {
      if (locale === 'en') {
        return path;
      }
      return `/${locale}${path}`;
    };

    return (

      <section className="breadcrumb-wrapper fix bg-cover" data-background={bgimg}>
      <div className="container">
          <div className="row">
              <div className="page-heading">
                  <h2>{Title}</h2>
                  <ul className="breadcrumb-list">
                      <li>
                      <Link to={getLocalizedPath('/')}>{t('nav.home') || 'Home'}</Link>
                      </li>
                      <li><i className={`bi ${locale === 'ar' ? 'bi-chevron-double-left' : 'bi-chevron-double-right'}`}></i></li>
                      <li>{Title}</li>
                  </ul>
              </div>
          </div>
      </div>
  </section>


    );
};

export default BreadCumb;