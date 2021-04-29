import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor() { }

  //gets all the active features for a userId
  getActiveFeatureIdsForUser(id: number): Observable<number[]> { 
    return from(
      fetch(`api/${id}/activefeatures`)
        .then(response => response.json())
        .then(json => JSON.parse(json) as number[])
    )
  }

  //gets all the existing features
  getFeatures(): Observable<Feature[]> { 
    return from(
      fetch('api/allfeatures')
        .then(response => response.json())
        .then(json => JSON.parse(json) as Feature[])
    )
  }
}

export interface Feature { 
  id: number;
  name: string;
}
