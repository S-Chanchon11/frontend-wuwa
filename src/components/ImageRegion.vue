<template>
  <div id="map" class="map"></div>
    <div class="offcanvas offcanvas-start fade" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel" aria-hidden="true">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
  </div>
</div>
</template>

<script>
import { Feature, Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import ImageLayer from "ol/layer/Image";
import { OSM, Vector as VectorSource, TileDebug } from "ol/source";
import Static from "ol/source/ImageStatic.js";
import Projection from "ol/proj/Projection.js";
import { getCenter } from "ol/extent.js";
import { Point, Polygon } from "ol/geom.js";
import { Icon, Style } from "ol/style.js";

import { Offcanvas } from "bootstrap";

export default {
  name: "Map",
  data() {
    return {
      featureName: '',
      modalInstance: null
    };
  },
  mounted() {
    this.initmap();
  },
  methods: {
    initmap() {
      const place = [3500, 5800];

      const point = new Point(place);

      const extent = [0, 0, 6277, 6277];
      // const extent = [0, 0, 1024, 968];
      const projection = new Projection({
        code: "xkcd-image",
        units: "pixels",
        extent: extent,
      });
      const polygonFeature = new Feature(
        new Polygon([
          [
            [3000, 3000],
            [3200, 3300],
          ],
        ])
      );
      // const iconFeature = new Feature({
      //   geometry: new Point([3600, 5500]),
      //   name: "Norfall",
      // });
      // const iconStyle = new Style({
      //   image: new Icon({
      //     anchor: [0.5, 1],
      //     anchorXUnits: "fraction",
      //     anchorYUnits: "pixels",
      //     width: 40,
      //     height: 40,
      //     src: "src/assets/point.png", // Example icon URL
      //   }),
      // });
      // iconFeature.setStyle(iconStyle);
      // const vectorSource = new VectorSource({
      //   features: [iconFeature],
      // });
      const vectorSource = new VectorSource();

      const markers = [
        { id: 1, geometry: [3600, 5300], name: 'Norfall Barrens', detail:'Norfall Barrens is a region in Huanglong. The area consists of a narrow passageway from Desorock Highland reaching down into the central area of the barrens. Once the area has sloped down into the main area, a multitude of floating buildings are found. A number of grapple points exist, leading to the highest building. On the sides are a few islands with more ruins. Four Resonance Beacons exist in this region.' },
        { id: 2, geometry: [2600, 4600], name: 'Desorock Highland ' ,detail:'Desorock Highland is a reigon in Huanglong. The region is on the northwestern side of Jinzhou and borders the Central Plains as well as the Norfall Barrens. The area features a large Tacet Field containing the Thundering Mephis as well as multiple military bases and exile camps.'},
        { id: 3, geometry: [2300, 4000], name: 'Gorges of Spirits',detail:'While Jinzhou is the newest addition to Huanglong\'s cities, it holds a crucial position as a strategic pass. Travelers journeying to Jinzhou from other parts of Huanglong must pass through the Gorges of Spirits, a vital gateway into the city' },
        { id: 4, geometry: [1500, 3700], name: 'Central Plains' ,detail:''},
        { id: 5, geometry: [2450, 3100], name: 'Jinzhou',detail:'It is a fortified city on the frontier that stands guard against the looming Tacet Discord crisis, founded by the Rover during their previous awakening. Jinzhou is the most recent city established in Huanglong, and the only city in Outer Huanglong. According to Chixia and Sanhua, it is also neither the biggest nor the most populated of the six major cities. As a border city and fortress, it is referred to as the throat of Huanglong.' },
        { id: 6, geometry: [2500, 2250], name: 'Tiger\'s Maw ' ,detail:'Tiger\'s Maw is a region in Huanglong. Tiger\'s Maw is located south of Jinzhou. This region has a large mine as its main feature.'},
        { id: 7, geometry: [1400, 1900], name: 'Port City of Guixu' ,detail:'The Port City of Guixu was a former settlement located off of the western coast of Huanglong. The Incinero Petal Toxin from the Sea of Flames caused the destruction and mass evacuation of the city. Before the Lament, The Port City of Guixu had an outdoor music venue at Nostalgia Isle, as well as a record shop within the city.'},
        { id: 8, geometry: [3000, 2100], name: 'Wuming Bay' ,detail:'Wuming Bay is a region of Huanglong. Wuming Bay is southeast of Jinzhou.'},
        { id: 9, geometry: [2400, 1200], name: 'Dim Forest' ,detail:''},
        { id: 10, geometry: [3200, 1200], name: 'Whining Aix\'s Mire' ,detail:''},
      ];

      markers.forEach(marker => {
        const feature = new Feature({
          geometry: new Point(marker.geometry),
          id: marker.id,
          name: marker.name,
          detail: marker.detail,
        });
        feature.setStyle(
          new Style({
            image: new Icon({
              anchor: [0.5, 1],
              width: 40,
              height: 40,
              src: 'src/assets/point.png',
            }),
          })
        );
        vectorSource.addFeature(feature);
      });
      const vectorLayer = new VectorLayer({
  source: vectorSource,
});

      const map = new Map({
        target: "map",
        layers: [
          //   new VectorLayer({
          //   background: "#1a2b39",
          //   source: new VectorSource({
          //     url: "src/assets/geojson.geojson",
          //     format: new GeoJSON(),
          //   }),
          //   style: {
          //     "fill-color": ["string", ["get", "COLOR"], "#eee"],
          //   },
          // }),
          // new VectorLayer({
          //   source: new VectorSource(),
          //   style: {
          //     "stroke-color": "rgba(255, 255, 255, 0.7)",
          //     "stroke-width": 2,
          //   },
          // }),
          new ImageLayer({
            source: new Static({
              url: "src/assets/map3.svg",
              projection: projection,
              imageExtent: extent,
              minResolution: 600,
              maxResolution: 1000,
              maxZoom: 6,
            }),
          }),
          vectorLayer,
          // new VectorLayer({
          //   source: new VectorSource({
          //     features: [new Feature(point)],
          //   }),
          //   style: {
          //     "circle-radius": 9,
          //     "circle-fill-color": "red",
          //   },
          // }),
          // new VectorLayer({
          //   source: new VectorSource({
          //     features: [polygonFeature],
          //   }),
          //   style: {
          //     "stroke-width": 3,
          //     "stroke-color": [255, 0, 0, 1],
          //     "fill-color": [0, 0, 255, 0.6],
          //   },
          // }),
        ],
        view: new View({
          projection: projection,
          center: getCenter(extent),
          zoom: 2,
          minZoom: 2.2,
          maxZoom: 6,
        }),
      });
      
      const elementmodal = document.getElementById("offcanvas");


      // display popup on click
      map.on("click", function (evt) {
        const feature = map.forEachFeatureAtPixel(
          evt.pixel,
          function (feature) {
            return feature;
          }
        );
        // disposePopover();
        if (!feature) {
          return;
        }
        this.featureName = feature.get('name');

        if (!this.modalInstance) {
          this.modalInstance = new Offcanvas(elementmodal);
        }
        elementmodal.querySelector(".offcanvas-body").innerHTML = feature.get('detail');
        elementmodal.querySelector(".offcanvas-title").innerHTML = feature.get('name');

        this.modalInstance.show();

      });

      // change mouse cursor when over marker
      map.on("pointermove", function (e) {
        const targetElement = map.getTargetElement();
        if (targetElement) {
          const pixel = map.getEventPixel(e.originalEvent);
          const hit = map.hasFeatureAtPixel(pixel);
          targetElement.style.cursor = hit ? "pointer" : "";
        }
      });
      // map.on("movestart", disposePopover);
      // map.getView().on("change:center", disposePopover);
      // map.getView().on("change:resolution", disposePopover);
    },
  },
};
</script>

<style scoped>
.map {
  width: 1900px;
  height: 1300px;
}
.offcanvas {
  width: 600px;
}

/* .ol-popup {
  position: absolute;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  bottom: 12px;
  left: -50px;
}

.ol-popup:after,
.ol-popup:before {
  top: 100%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}

.ol-popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}

.ol-popup:before {
  border-top-color: #cccccc;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
} */
</style>
