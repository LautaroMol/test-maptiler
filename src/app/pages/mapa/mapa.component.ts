import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, MapStyle, config } from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css',
})
export class MapaComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;
  geo: any;
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  constructor() {}
  ngOnDestroy(): void {
    this.map?.remove();
  }

  ngOnInit(): void {
    config.apiKey = 'oEDh6mPK2TIhdFrpa70J';
  }

  ngAfterViewInit(): void {
    const initialState = { lng: 139.753, lat: 35.6844, zoom: 14 };
  this.map = new Map({
    container: this.mapContainer.nativeElement,
    style: MapStyle.STREETS,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  });
  }
}
