import { Routes } from '@angular/router';


import { HomeRoutes } from './home/index';
import { AboutRoutes } from './about/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes

];
