import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, concat, merge, Observable } from 'rxjs';
import { combineAll, concatAll, concatMap, map, mergeMap } from 'rxjs/operators';
import { Feature, FeatureService } from '../service/feature.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  @Input() userId!: number;
  private features$!: Observable<Feature[]>;
  /*
  Update the feature component to get and display a list of features per userId
  The component will always receive a userId 

  The feature.service.ts is defined in service/feature.service.ts
  It has two methods, one to get the featureIds for the user and one to get all features.
  */

  //They should inject the service here
  constructor(private readonly featureService: FeatureService) { }

  ngOnInit(): void {
    this.features$ = combineLatest(
        this.featureService.getFeatures(),
        this.featureService.getActiveFeatureIdsForUser(this.userId)
    ).pipe(
      map(([features, activeIds]) => features.filter(feature => activeIds.includes(feature.id)))
    );    
  }
}
