
declare namespace google {
  namespace maps {
    class Map {
      constructor(mapDiv: Element, opts?: MapOptions);
    }

    class Marker {
      constructor(opts?: MarkerOptions);
    }

    interface MapOptions {
      center?: LatLng;
      zoom?: number;
      styles?: any[];
    }

    interface MarkerOptions {
      position: LatLng;
      map: Map;
      title?: string;
    }

    class LatLng {
      constructor(lat: number, lng: number);
      lat(): number;
      lng(): number;
    }
  }
}
