import DropDown from './DropDown';
import { Link } from "react-router";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link to="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
              Home Version 1
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
              Home Version 2
              </Link>
            </li>
            <li>
              <Link to="/home3" onClick={() => setMobileToggle(false)}>
                Home Version 3
              </Link>
            </li>            
          </ul>
        </DropDown>
      </li>

      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
        About Us
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link to="/destination" onClick={() => setMobileToggle(false)}>
        Destination
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/destination" onClick={() => setMobileToggle(false)}>
              Destination
              </Link>
            </li>
            <li>
              <Link to="/destination/destination-details" onClick={() => setMobileToggle(false)}>
              Destination Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="/tour" onClick={() => setMobileToggle(false)}>
        Tour
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/tour" onClick={() => setMobileToggle(false)}>
              Tour
              </Link>
            </li>          
            <li>
              <Link to="/tour/tour-details" onClick={() => setMobileToggle(false)}>
              Tour Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li> 
      
      <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/activities" onClick={() => setMobileToggle(false)}>
              Activities
              </Link>
            </li> 
            <li>
              <Link to="/activities/activities-details" onClick={() => setMobileToggle(false)}>
              Activities Details
              </Link>
            </li>             
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>            
            <li>
              <Link to="/team/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>             
            <li>
              <Link to="/faq" onClick={() => setMobileToggle(false)}>
              Our Faq
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>        

      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/blog-sidebar" onClick={() => setMobileToggle(false)}>
                Blog With Sidebar
              </Link>
            </li>                         
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
