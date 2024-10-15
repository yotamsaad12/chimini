import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { LatLngExpression } from 'leaflet';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements AfterViewInit {
  private map: L.Map | undefined;
  private markers: L.Marker[] = [];

  locations = [
    {
      name: 'Head Office',
      coords: [32.7767, -96.7970], // Dallas, TX
      description: 'Our headquarters located in Tech City.'
    },
    {
      name: 'West Branch',
      coords: [34.0522, -118.2437], // Los Angeles, CA
      description: 'Serving our customers on the West Coast.'
    },
    {
      name: 'East Branch',
      coords: [40.7128, -74.0060], // New York, NY
      description: 'Our East Coast operations hub.'
    }
  ];

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([39.8283, -98.5795], 4); // Centered on the USA

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.locations.forEach(location => {
      const marker = L.marker(location.coords as LatLngExpression).addTo(this.map!);
      marker.bindPopup(`<b>${location.name}</b><br>${location.description}`);
      this.markers.push(marker);
    });
  }

  zoomToLocation(coords: number[]): void {
    if (this.map) {
      this.map.setView(coords as LatLngExpression, 12, { animate: true });
    }
  }
}

