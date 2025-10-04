import { createBrowserRouter, Outlet } from "react-router";
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
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ForgotPasswordPage from "../Pages/ForgotPasswordPage";
import AdminDashboard from "../Pages/AdminDashboard";
import AdminIndex from "../Pages/AdminIndex";
import { LanguageProvider } from "../contexts/LanguageContext";
import { LayoutProvider } from "../contexts/useLayoutContext";

// Wrapper component to provide language context
function LanguageWrapper() {
  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  );
}

// Wrapper component for admin routes with LayoutProvider
function AdminWrapper() {
  return (
    <LayoutProvider>
      <Outlet />
    </LayoutProvider>
  );
}

// Define all page routes
const pageRoutes = [
  {
    path: "",
    Component: Main,
    children: [
      {
        index: true,
        Component: Home3,
      },
    ],
  },
  {
    path: "about",
    Component: Layout3,
    children: [
      {
        index: true,
        Component: AboutPage,
      },
    ],
  },
  {
    path: "destination",
    Component: Layout3,
    children: [
      {
        index: true,
        Component: DestinationPage,
      },
      {
        path: "destination-details",
        Component: DestinationDetailsPage,
      },
    ],
  },
  {
    path: "tour",
    Component: Layout3,
    children: [
      {
        index: true,
        Component: TourPage,
      },
      {
        path: "tour-details",
        Component: TourDetailsPage,
      },
    ],
  },
  {
    path: "activities",
    Component: Layout3,
    children: [
      {
        index: true,
        Component: ActivitiesPage,
      },
      {
        path: "activities-details",
        Component: ActivitiesDetailsPage,
      },
    ],
  },
  {
    path: "team",
    Component: Layout3,
    children: [
      {
        index: true,
        Component: TeamPage,
      },
      {
        path: "team-details",
        Component: TeamDetailsPage,
      },
    ],
  },
  {
    path: "contact",
    Component: Layout3,
    children: [
      {
        index: true,
        Component: ContactPage,
      },
    ],
  },
  {
    path: "blog",
    Component: Layout3,
    children: [
      {
        index: true,
        Component: BlogGrid,
      },
      {
        path: "blog-details",
        Component: BlogDetailsPage,
      },
    ],
  },
  {
    path: "blog-sidebar",
    Component: Layout3,
    children: [
      {
        index: true,
        Component: BlogSidebarPage,
      },
    ],
  },
  {
    path: "home2",
    Component: Layout3,
    children: [
      {
        index: true,
        Component: Home2,
      },
    ],
  },
  {
    path: "home1",
    Component: Layout2,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "login",
    children: [
      {
        index: true,
        Component: LoginPage,
      },
    ],
  },
  {
    path: "register",
    children: [
      {
        index: true,
        Component: RegisterPage,
      },
    ],
  },
  {
    path: "forgot-password",
    children: [
      {
        index: true,
        Component: ForgotPasswordPage,
      },
    ],
  },
  // Admin routes
  {
    path: "admin",
    Component: AdminWrapper,
    children: [
      {
        index: true,
        Component: AdminIndex,
      },
      {
        path: "dashboard",
        Component: AdminDashboard,
      },
    ],
  },
];

export const router = createBrowserRouter([
  // English routes (default, no prefix)
  {
    path: "/",
    Component: LanguageWrapper,
    children: pageRoutes,
  },
  // Localized routes (with locale prefix)
  {
    path: "/:locale",
    Component: LanguageWrapper,
    children: pageRoutes,
  },
]);