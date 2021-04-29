import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  @Input() userId!: number;
  
  /*
  Update the feature component to get and display a list of features per userId
  The component will always receive a userId 

  The feature.service.ts is defined in service/feature.service.ts
  It has two methods, one to get the featureIds for the user and one to get all features.
  */
  constructor() { }

  ngOnInit(): void {
  }
}
