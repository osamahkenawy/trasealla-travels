# Admin Pages & Components Guide

This guide explains all the admin pages and components that have been integrated into your Trasealla project.

## 📁 Directory Structure

```
src/
├── Pages/
│   ├── AdminDashboard.jsx          # Main dashboard
│   └── Admin/
│       ├── ChartsPage.jsx          # Apex Charts showcase
│       ├── TablesBasicPage.jsx     # Basic HTML tables
│       ├── TablesDataPage.jsx      # GridJS data tables
│       ├── FormsBasicPage.jsx      # Form components
│       ├── Charts/                 # Chart components
│       │   └── component/
│       │       └── AllApexChart.jsx
│       ├── Tables/                 # Table components
│       │   ├── basic/
│       │   │   ├── data.js
│       │   │   └── page.jsx
│       │   └── gridjs/
│       │       └── components/
│       │           └── AllDataTables.jsx
│       ├── Forms/                  # Form components
│       │   ├── basic/
│       │   ├── validation/
│       │   ├── file-uploads/
│       │   └── editors/
│       ├── BaseUI/                 # UI components
│       │   ├── accordion/
│       │   ├── alerts/
│       │   ├── buttons/
│       │   ├── cards/
│       │   ├── modals/
│       │   └── [more components]
│       ├── Maps/                   # Map components
│       │   ├── google/
│       │   └── vector/
│       └── Icons/                  # Icon pages
│           ├── boxicons/
│           └── solaricons/
```

## 🎯 Available Pages

### Core Pages
- ✅ **Dashboard** - `/admin/dashboard`
  - Stats cards
  - Charts
  - Recent bookings table

### Charts & Visualizations
- ✅ **Charts** - `/admin/charts`
  - Line Charts
  - Area Charts
  - Bar Charts
  - Pie Charts
  - Donut Charts
  - Radar Charts
  - Polar Charts
  - Candlestick Charts
  - And many more!

### Tables
- ✅ **Basic Tables** - `/admin/tables/basic`
  - Simple table
  - Striped table
  - Bordered table
  - Hover table
  - Responsive tables

- ✅ **Data Tables** - `/admin/tables/data`
  - GridJS tables with:
    - Sorting
    - Searching
    - Pagination
    - Column filtering
    - Server-side data

### Forms
- ✅ **Basic Forms** - `/admin/forms/basic`
  - Text inputs
  - Textareas
  - Select dropdowns
  - Checkboxes
  - Radio buttons
  - Form layouts

- 📦 **Form Validation** - `/admin/forms/validation` (Available in source)
- 📦 **File Uploads** - `/admin/forms/uploads` (Available in source)
- 📦 **Text Editors** - `/admin/forms/editors` (Available in source)

### UI Components (Available in source files)
- 📦 **Buttons** - Various button styles
- 📦 **Cards** - Card layouts
- 📦 **Modals** - Modal dialogs
- 📦 **Alerts** - Alert components
- 📦 **Dropdowns** - Dropdown menus
- 📦 **Accordion** - Collapsible content
- 📦 **Tabs** - Tabbed interfaces
- 📦 **Tooltips** - Hover tooltips
- 📦 **Popovers** - Popover components
- 📦 **Progress Bars** - Progress indicators
- 📦 **Spinners** - Loading spinners
- 📦 **Pagination** - Page navigation
- 📦 **Badges** - Badge components
- 📦 **Avatars** - User avatars
- 📦 **Breadcrumbs** - Navigation breadcrumbs

### Maps (Available in source files)
- 📦 **Google Maps** - `/admin/maps/google`
- 📦 **Vector Maps** - `/admin/maps/vector`

### Icons
- 📦 **Solar Icons** - `/admin/icons/solar`
- 📦 **Box Icons** - `/admin/icons/boxicons`

## 🔧 How to Add More Pages

### 1. Create the Page Component
```jsx
// src/Pages/Admin/MyNewPage.jsx
import React from 'react';
import { Link } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import AdminLayout from '../../Components/Admin/AdminLayout';
import IconifyIcon from '../../Components/Admin/wrapper/IconifyIcon';

const MyNewPage = () => {
  return (
    <AdminLayout>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <h4 className="mb-0">My New Page</h4>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/admin">Trasealla</Link>
              </li>
              <div className="mx-1" style={{ height: 24 }}>
                <IconifyIcon icon="bx:chevron-right" height={16} width={16} />
              </div>
              <li className="breadcrumb-item active">My New Page</li>
            </ol>
          </div>
        </Col>
      </Row>

      {/* Your page content here */}
    </AdminLayout>
  );
};

export default MyNewPage;
```

### 2. Add Route
```jsx
// In src/Routes/Routes.jsx
import MyNewPage from "../Pages/Admin/MyNewPage";

// Add to admin children:
{
  path: "mynewpage",
  Component: MyNewPage,
}
```

### 3. Add Menu Item
```jsx
// In src/data/menu-items.js
{
  key: 'mynewpage',
  label: 'My New Page',
  icon: 'solar:document-outline',
  url: '/admin/mynewpage'
}
```

## 🎨 Using Components

### Using Charts
```jsx
import ReactApexChart from 'react-apexcharts';

const options = {
  chart: { type: 'line' },
  series: [{
    name: 'Sales',
    data: [30, 40, 35, 50, 49, 60, 70]
  }]
};

<ReactApexChart options={options} series={options.series} type="line" height={350} />
```

### Using Data Tables
```jsx
import { Grid } from 'gridjs-react';

<Grid
  data={[
    ['John', 'john@example.com', '25'],
    ['Jane', 'jane@example.com', '30']
  ]}
  columns={['Name', 'Email', 'Age']}
  search={true}
  pagination={{ limit: 10 }}
  sort={true}
/>
```

### Using Forms
```jsx
import { useForm } from 'react-hook-form';

const { register, handleSubmit } = useForm();

<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register('name')} className="form-control" />
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
```

## 📦 Available Source Files

All admin pages are available in `src/Pages/Admin/`:
- `Charts/` - All chart types
- `Tables/` - Basic and GridJS tables
- `Forms/` - All form types
- `BaseUI/` - All UI components
- `Maps/` - Google and Vector maps
- `Icons/` - Icon showcases

## 🚀 Current Active Routes

- `/admin` → Dashboard
- `/admin/dashboard` → Dashboard
- `/admin/charts` → Apex Charts
- `/admin/tables/basic` → Basic Tables
- `/admin/tables/data` → Data Tables
- `/admin/forms/basic` → Basic Forms

## 📝 Notes

- All components are already copied and available in your `src/` directory
- Most pages are pre-built and just need routes added
- Use the existing pages as templates for new pages
- All admin pages use the `AdminLayout` component
- Menu items are managed in `src/data/menu-items.js`

## 🎯 Next Steps

1. Add more routes for the available pages
2. Connect pages to your backend API
3. Customize pages for your travel business needs
4. Add authentication guards to protect admin routes

---

**Happy Building! 🎉**
