import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard/Dashboard'));
const OrderList = React.lazy(() => import('./views/OrderList/OrderList'));
const StoreList = React.lazy(() => import('./views/StoreList/StoreList'));
const CollectionList = React.lazy(() => import('./views/CollectionList/CollectionList'));
const SalesExctiveList = React.lazy(() => import('./views/SalesExctive/SalesExctiveList'));
const add = React.lazy(() => import('./views/SalesExctive/AddSalesExctive'));
const Inventory = React.lazy(() => import('./views/Inventory/Inventory'));
const Report = React.lazy(() => import('./views/Report/Report'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/order-list', name: 'OrderList', component: OrderList },
  { path: '/store-list', name: 'StoreList', component: StoreList },
  { path: '/collection-list', name: 'CollectionList', component: CollectionList },
  { path: '/sales-exctive', name: 'SalesExctiveList', component: SalesExctiveList },
  { path: '/add', name: 'Add', component: add },
  { path: '/inventory', name: 'Inventory', component: Inventory },
  { path: '/report', name: 'Report', component: Report },
];

export default routes;
