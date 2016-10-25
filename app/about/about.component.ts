import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';

@Component ({
  selector: 'about-app',
  templateUrl: 'app/about/about.html',
  styleUrls: ['app/about/about.css']
})
export class AboutComponent {
  parentRouteId: number;
  private sub: any;
  constructor(private route: ActivatedRoute) {}
    ngOnInit() {
    // Get parent ActivatedRoute of this route.
    this.parentRouteId = +this.route.snapshot.params['id'];

  }
}

@Component ({
  selector: 'aboutname-app',
  templateUrl: 'app/about/aboutdetails/aboutname.html',
  styleUrls: ['app/about/aboutdetails/aboutdetails.css']

})
export class AboutNameComponent {}

@Component ({
  selector: 'aboutcontent-app',
  templateUrl: 'app/about/aboutdetails/aboutcontent.html',
  styleUrls: ['app/about/aboutdetails/aboutdetails.css']

})
export class AboutContentComponent {}
