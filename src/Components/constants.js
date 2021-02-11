export const jsonPlaceholderApi = 'https://jsonplaceholder.typicode.com';

export const userColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend']
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city'
  },
  {
    title: 'Company',
    dataIndex: 'companyName',
    key: 'companyName'
  }
];

export const postsColumns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Body',
    dataIndex: 'body',
    key: 'body'
  }
];