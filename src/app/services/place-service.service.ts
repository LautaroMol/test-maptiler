import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public L:any = null;
	public Routing:any = null;
	public userLocation?: [number, number];
  constructor() { 
    this.getUserLocation();
  }

  private getUserLocation() {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        this.userLocation = [coords.latitude, coords.longitude];
        document.dispatchEvent(new Event('userLocationReady'));
      }, (error) => {
        console.error('Error getting location:', error);
        this.userLocation = undefined;
      }
    );
  }
}
