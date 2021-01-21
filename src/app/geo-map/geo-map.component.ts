import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Router } from '@angular/router';

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end
@Component({
  selector: 'app-geo-map',
  templateUrl: './geo-map.component.html',
  styleUrls: ['./geo-map.component.css']
})
export class GeoMapComponent implements OnInit {
  r : any;
  constructor(private router: Router ) {}

  ngOnInit(): void {
    // Create map instance
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodata = am4geodata_worldLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Series for World map
    let worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.exclude = ["AQ"];
    worldSeries.useGeodata = true;

    let polygonTemplate = worldSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.fill = chart.colors.getIndex(0);
    polygonTemplate.nonScalingStroke = true;

    // Hover state
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    // Series for United States map
    let usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
    usaSeries.geodata = am4geodata_usaLow;

    let usPolygonTemplate = usaSeries.mapPolygons.template;
    usPolygonTemplate.tooltipText = "{name}";
    usPolygonTemplate.fill = chart.colors.getIndex(1);
    usPolygonTemplate.nonScalingStroke = true;

    // Hover state
    let h = usPolygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#367B25");

    // Create active state
    let activeState = polygonTemplate.states.create("active");
    activeState.properties.fill = chart.colors.getIndex(4);

    // Create an event to toggle "active" state
    polygonTemplate.events.on("hit", function (ev) {
      ev.target.isActive = !ev.target.isActive;
      this.router.navigate(['/country-data']);
    }, this)
    
  }

}
