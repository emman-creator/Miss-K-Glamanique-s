
import React, { useEffect, useRef } from "react";

interface GoogleMapProps {
  apiKey: string;
  center?: {
    lat: number;
    lng: number;
  };
  zoom?: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({
  apiKey,
  center = { lat: -4.0435, lng: 39.6682 }, // Mombasa, Kenya default location
  zoom = 15,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.Marker | null>(null);

  useEffect(() => {
    // Load Google Maps API script
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    // Initialize map when API is loaded
    window.initMap = () => {
      if (mapRef.current) {
        const mapOptions: google.maps.MapOptions = {
          center: new google.maps.LatLng(center.lat, center.lng),
          zoom: zoom,
          styles: [
            {
              featureType: "all",
              elementType: "geometry",
              stylers: [{ lightness: 10 }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ lightness: 20 }],
            },
          ],
        };

        // Create the map
        mapInstanceRef.current = new google.maps.Map(mapRef.current, mapOptions);

        // Add marker
        markerRef.current = new google.maps.Marker({
          position: new google.maps.LatLng(center.lat, center.lng),
          map: mapInstanceRef.current,
          title: "Our Location",
        });
      }
    };

    return () => {
      // Clean up
      window.initMap = undefined;
      document.head.removeChild(script);
    };
  }, [apiKey, center, zoom]);

  return (
    <div
      ref={mapRef}
      className="w-full h-full rounded-xl overflow-hidden shadow-md"
    ></div>
  );
};

declare global {
  interface Window {
    initMap: (() => void) | undefined;
  }
}

export default GoogleMap;
