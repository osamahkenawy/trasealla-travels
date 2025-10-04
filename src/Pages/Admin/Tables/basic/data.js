const avatar1 = '/assets/admin/users/avatar-1.jpg';
const avatar2 = '/assets/admin/users/avatar-2.jpg';
const avatar4 = '/assets/admin/users/avatar-4.jpg';
const avatar6 = '/assets/admin/users/avatar-6.jpg';
const avatar7 = '/assets/admin/users/avatar-7.jpg';

export const tableData = [
  {
    id: '1',
    firstName: 'Mark',
    lastName: 'Otto',
    handle: '@mdo'
  },
  {
    id: '2',
    firstName: 'Jacob',
    lastName: 'Thornton',
    handle: '@fat'
  },
  {
    id: '3',
    firstName: 'Larry the Bird',
    lastName: 'Simsons',
    handle: '@twitter'
  }
];

export const extendedTableData = [
  {
    id: '501',
    name: 'Tony M. Carter',
    avatar: avatar2,
    title: 'Designer',
    email: 'tonymcarter@jourrapide.com',
    role: 'Member'
  },
  {
    id: '502',
    name: 'James E. Chamb',
    avatar: avatar1,
    title: 'UI/UX Designer',
    email: 'jamesechambliss@teleworm.us',
    role: 'Admin'
  },
  {
    id: '503',
    name: 'Charlotte J. Torres',
    avatar: avatar4,
    title: 'Copywriter',
    email: 'charlotte@jourrapide.com',
    role: 'Member'
  },
  {
    id: '504',
    name: 'Mary J. Germain',
    avatar: avatar6,
    title: 'Full Stack',
    email: 'maryjgermain@jourrapide.com',
    role: 'CEO',
    verified: true
  },
  {
    id: '505',
    name: 'Kevin C. Reyes',
    avatar: avatar7,
    title: 'Director of Product',
    email: 'kevincreyes@jourrapide.com',
    role: 'Member'
  }
];

export const allTables = [
  {
    title: 'Basic Table',
    variant: 'table',
    headers: ['#', 'First Name', 'Last Name', 'Handle'],
    data: tableData.map(item => [item.id, item.firstName, item.lastName, item.handle])
  },
  {
    title: 'Striped Rows',
    variant: 'table table-striped',
    headers: ['#', 'First Name', 'Last Name', 'Handle'],
    data: tableData.map(item => [item.id, item.firstName, item.lastName, item.handle])
  },
  {
    title: 'Bordered Table',
    variant: 'table table-bordered',
    headers: ['#', 'First Name', 'Last Name', 'Handle'],
    data: tableData.map(item => [item.id, item.firstName, item.lastName, item.handle])
  },
  {
    title: 'Hoverable Rows',
    variant: 'table table-hover',
    headers: ['#', 'First Name', 'Last Name', 'Handle'],
    data: tableData.map(item => [item.id, item.firstName, item.lastName, item.handle])
  }
];