export const MENU_ITEMS = [
  {
    key: 'menu',
    label: 'MENU',
    isTitle: true
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: 'solar:widget-2-outline',
    url: '/admin/dashboard'
  },
  
  // Charts
  {
    key: 'charts',
    label: 'Charts',
    icon: 'solar:chart-outline',
    url: '/admin/charts'
  },
  
  // Tables
  {
    key: 'tables',
    label: 'Tables',
    icon: 'solar:clipboard-list-outline',
    children: [
      {
        key: 'basic-tables',
        label: 'Basic Tables',
        url: '/admin/tables/basic',
        parentKey: 'tables'
      },
      {
        key: 'data-tables',
        label: 'Data Tables',
        url: '/admin/tables/data',
        parentKey: 'tables'
      }
    ]
  },
  
  // Forms
  {
    key: 'forms',
    label: 'Forms',
    icon: 'solar:document-text-outline',
    children: [
      {
        key: 'basic-forms',
        label: 'Basic Forms',
        url: '/admin/forms/basic',
        parentKey: 'forms'
      },
      {
        key: 'form-validation',
        label: 'Validation',
        url: '/admin/forms/validation',
        parentKey: 'forms'
      },
      {
        key: 'file-uploads',
        label: 'File Uploads',
        url: '/admin/forms/uploads',
        parentKey: 'forms'
      }
    ]
  },
  
  // UI Components
  {
    key: 'components',
    label: 'UI Components',
    isTitle: true
  },
  {
    key: 'base-ui',
    label: 'Base UI',
    icon: 'solar:leaf-outline',
    children: [
      {
        key: 'buttons',
        label: 'Buttons',
        url: '/admin/ui/buttons',
        parentKey: 'base-ui'
      },
      {
        key: 'cards',
        label: 'Cards',
        url: '/admin/ui/cards',
        parentKey: 'base-ui'
      },
      {
        key: 'modals',
        label: 'Modals',
        url: '/admin/ui/modals',
        parentKey: 'base-ui'
      },
      {
        key: 'alerts',
        label: 'Alerts',
        url: '/admin/ui/alerts',
        parentKey: 'base-ui'
      },
      {
        key: 'dropdowns',
        label: 'Dropdowns',
        url: '/admin/ui/dropdowns',
        parentKey: 'base-ui'
      }
    ]
  },
  
  // Icons
  {
    key: 'icons',
    label: 'Icons',
    icon: 'solar:bell-outline',
    children: [
      {
        key: 'solar-icons',
        label: 'Solar Icons',
        url: '/admin/icons/solar',
        parentKey: 'icons'
      },
      {
        key: 'box-icons',
        label: 'Box Icons',
        url: '/admin/icons/boxicons',
        parentKey: 'icons'
      }
    ]
  },
  
  // Maps
  {
    key: 'maps',
    label: 'Maps',
    icon: 'solar:map-point-outline',
    children: [
      {
        key: 'google-maps',
        label: 'Google Maps',
        url: '/admin/maps/google',
        parentKey: 'maps'
      },
      {
        key: 'vector-maps',
        label: 'Vector Maps',
        url: '/admin/maps/vector',
        parentKey: 'maps'
      }
    ]
  },
  
  // Travel Management
  {
    key: 'travel',
    label: 'TRAVEL MANAGEMENT',
    isTitle: true
  },
  {
    key: 'tours',
    label: 'Tours',
    icon: 'solar:suitcase-outline',
    url: '/admin/tours'
  },
  {
    key: 'destinations',
    label: 'Destinations',
    icon: 'solar:map-point-wave-outline',
    url: '/admin/destinations'
  },
  {
    key: 'bookings',
    label: 'Bookings',
    icon: 'solar:calendar-mark-outline',
    url: '/admin/bookings'
  },
  {
    key: 'users',
    label: 'Users',
    icon: 'solar:users-group-rounded-outline',
    url: '/admin/users'
  }
];