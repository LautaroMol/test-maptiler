import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Map, MapStyle, config, Marker } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import * as maptilersdk from '@maptiler/sdk';

maptilersdk.config.apiKey = 'oEDh6mPK2TIhdFrpa70J';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.map?.remove();
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      config.apiKey = 'oEDh6mPK2TIhdFrpa70J';
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.map = new Map({
          container: this.mapContainer.nativeElement,
          style: maptilersdk.MapStyle.STREETS,
          center: [139.753, 35.6844],
          zoom: 14,
          terrainControl: true,
          scaleControl: true,
          fullscreenControl: 'top-left',
          geolocateControl: true,
        });
        new Marker({ color: '#FF0000' })
          .setLngLat([139.7525, 35.6846])
          .addTo(this.map);
        this.map.addControl(
          new maptilersdk.MaptilerGeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          }),
          'top-left'
        );
      }, 5000);
      
    }
  }
}
