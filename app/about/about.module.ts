import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AboutRoutes } from './about.routes';

import { AboutComponent, AboutNameComponent, AboutContentComponent } from './index';

@NgModule({
  imports: [ RouterModule.forChild(AboutRoutes) ],
  declarations: [AboutComponent, AboutNameComponent, AboutContentComponent],
})
export class AboutModule { }
