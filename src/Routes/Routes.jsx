import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import AboutPage from "../Pages/AboutPage";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import Layout3 from "../Layout/Layout3";
import Home3 from "../Pages/Home3";
import DestinationPage from "../Pages/DestinationPage";
import DestinationDetailsPage from "../Pages/DestinationDetailsPage";
import TourPage from "../Pages/TourPage";
import TourDetailsPage from "../Pages/TourDetailsPage";
import ActivitiesPage from "../Pages/ActivitiesPage";
import ActivitiesDetailsPage from "../Pages/ActivitiesDetailsPage";
import TeamPage from "../Pages/TeamPage";
import TeamDetailsPage from "../Pages/TeamDetailsPage";
import ContactPage from "../Pages/ContactPage";
import BlogGrid from "../Pages/BlogGrid";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import BlogSidebarPage from "../Pages/BlogSidebarPage";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: Main,
      children: [
        {
          index: true,
          Component: Home3,
        },                           
      ],
    },
    {
      path: "/",
      Component: Layout3,
      children: [                      
        {
            path: "/home2",
            Component: Home2
        },  
        {
          path: "/about",
          Component: AboutPage
        },
        {
          path: "/destination",
          Component: DestinationPage
        },          
        {
          path: "/destination/destination-details",
          Component: DestinationDetailsPage
        },        
        {
          path: "/tour",
          Component: TourPage
        },
        {
          path: "/tour/tour-details",
          Component: TourDetailsPage
        },
        {
          path: "/activities",
          Component: ActivitiesPage
        },
        {
          path: "/activities/activities-details",
          Component: ActivitiesDetailsPage
        },
        {
          path: "/team",
          Component: TeamPage
        },
        {
          path: "/team/team-details",
          Component: TeamDetailsPage
        },
        {
          path: "/contact",
          Component: ContactPage
        },
        {
          path: "/blog",
          Component: BlogGrid
        },
        {
          path: "/blog-sidebar",
          Component: BlogSidebarPage
        },        
        {
          path: "/blog/blog-details",
          Component: BlogDetailsPage
        },


      ],
    },
    {
      path: '/home1',
      Component: Layout2,
      children: [
        {
          index: true,
          Component: Home,
        },                           
      ],
    },      

  ]);