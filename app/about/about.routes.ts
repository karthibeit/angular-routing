import { Route } from '@angular/router';
import { AboutComponent,  AboutNameComponent, AboutContentComponent} from './index';

export const AboutRoutes: Route[] = [
  {
    path: 'about/:id', component: AboutComponent,
    children: [
      {path: '', redirectTo: 'aboutname'},
      {path: 'aboutname', component: AboutNameComponent},
      {path: 'aboutcontent', component: AboutContentComponent}

    ]
  }
];
