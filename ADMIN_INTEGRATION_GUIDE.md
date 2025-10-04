# Admin Dashboard Integration Guide

This guide explains how to use the integrated admin dashboard assets in your Trasealla React project.

## 📁 File Structure

```
src/
├── assets/
│   ├── admin.scss          # Main admin styles entry point
│   ├── main.css           # Your existing main styles (unchanged)
│   ├── login.css          # Your existing login styles (unchanged)
│   └── scss/              # Admin SCSS components
│       ├── components/    # UI components (buttons, cards, etc.)
│       ├── config/        # Variables and theme configuration
│       ├── icons/         # Icon styles
│       ├── pages/         # Page-specific styles
│       ├── plugins/       # Third-party plugin styles
│       └── structure/     # Layout components (sidebar, topbar, etc.)
├── Components/
│   └── Admin/             # Admin-specific React components
│       ├── AdminLayout.jsx
│       └── AdminNavigation.jsx
├── data/                  # Admin data files
│   ├── menu-items.js
│   ├── other.js
│   ├── social.js
│   └── topbar.js
└── Pages/
    └── AdminDashboard.jsx # Example admin dashboard page

public/
└── assets/
    └── admin/             # Admin images and assets
        ├── logo-dark.png
        ├── logo-light.png
        ├── logo-sm.png
        ├── users/         # User avatars
        └── small/         # Small images
```

## 🎨 Using Admin Styles

### Method 1: Import in Component (Recommended)
```jsx
import React from 'react';
import '../assets/admin.scss'; // Import admin styles

const AdminComponent = () => {
  return (
    <div className="admin-layout">
      {/* Your admin content */}
    </div>
  );
};
```

### Method 2: Import in Main Entry Point
```jsx
// In main.jsx
import './assets/main.css';    // Your existing styles
import './assets/admin.scss';  // Admin styles
```

## 🧩 Available Components

### AdminLayout
A complete admin layout with sidebar, topbar, and content area:
```jsx
import AdminLayout from '../Components/Admin/AdminLayout';

const MyAdminPage = () => {
  return (
    <AdminLayout>
      <h1>My Admin Page</h1>
    </AdminLayout>
  );
};
```

### AdminNavigation
Dynamic navigation using the menu-items.js data:
```jsx
import AdminNavigation from '../Components/Admin/AdminNavigation';

const Sidebar = () => {
  return (
    <div className="left-side-menu">
      <AdminNavigation />
    </div>
  );
};
```

## 🎯 Key Features

### ✅ What's Included
- **Complete Admin UI**: Sidebar, topbar, cards, tables, forms
- **Bootstrap Integration**: All Bootstrap components styled for admin
- **Plugin Styles**: ApexCharts, GridJS, Dropzone, etc.
- **Dark/Light Theme**: Built-in theme switching support
- **Responsive Design**: Mobile-friendly admin interface
- **Icon Support**: Boxicons and other icon libraries

### 🔧 Configuration
- **SCSS Variables**: Customize colors, spacing, etc. in `src/assets/scss/config/_variables.scss`
- **Theme Mode**: Dark/light theme configuration in `src/assets/scss/config/_theme-mode.scss`
- **Menu Items**: Edit navigation in `src/data/menu-items.js`

## 🚀 Getting Started

1. **Create an Admin Route**:
```jsx
// In your Routes.jsx
import AdminDashboard from '../Pages/AdminDashboard';

// Add route
<Route path="/admin" element={<AdminDashboard />} />
```

2. **Use Admin Components**:
```jsx
import AdminLayout from '../Components/Admin/AdminLayout';

const MyAdminPage = () => {
  return (
    <AdminLayout>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Admin Content</h4>
              <p>Your admin content here</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
```

## 🎨 Styling Guidelines

### CSS Classes Available
- **Layout**: `.admin-layout`, `.left-side-menu`, `.content-page`
- **Components**: `.card`, `.btn`, `.table`, `.form-control`
- **Utilities**: `.text-primary`, `.bg-light`, `.mb-3`, etc.

### Custom Styling
```scss
// Create your own admin styles
.my-admin-component {
  // Your custom styles
  // Admin variables are available
  color: var(--bs-primary);
  background: var(--bs-light);
}
```

## 🔄 No Conflicts

The admin styles are completely separate from your existing styles:
- **Main Website**: Uses `main.css` (unchanged)
- **Admin Dashboard**: Uses `admin.scss` (new)
- **Login Page**: Uses `login.css` (unchanged)

## 📦 Dependencies

All required dependencies are already installed:
- Bootstrap 5.3.5
- SCSS support via Vite
- Admin UI components
- Chart libraries (ApexCharts)
- Form libraries (React Hook Form)
- And many more...

## 🎯 Next Steps

1. Create admin routes in your router
2. Build admin pages using the AdminLayout component
3. Customize the admin theme in the SCSS variables
4. Add your admin functionality using the available components

## 🆘 Troubleshooting

### SCSS Not Compiling
- Ensure Vite config is updated (already done)
- Check import paths in admin.scss
- Verify Bootstrap is installed

### Styles Not Loading
- Import admin.scss in your admin components
- Check browser console for import errors
- Verify file paths are correct

### Build Issues
- Run `npm run build` to test
- Check for missing dependencies
- Verify all imports are correct

---

**Happy Admin Dashboard Building! 🎉**
