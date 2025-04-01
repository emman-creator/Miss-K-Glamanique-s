
import React, { useEffect, useRef } from "react";

interface LatLngObject {
  lat: number;
  lng: number;
}

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize the map when the component mounts
    if (mapRef.current) {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places`;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      
      window.document.body.appendChild(googleMapScript);
      
      googleMapScript.addEventListener("load", () => {
        if (window.google && mapRef.current) {
          // Location for WMMC+374, Dedan Kimathi Ave, Mombasa
          const mapCenter: LatLngObject = { 
            lat: -4.0435, 
            lng: 39.6682 
          };
          
          const map = new window.google.maps.Map(mapRef.current, {
            center: mapCenter as google.maps.LatLngLiteral,
            zoom: 15,
            styles: [
              {
                featureType: "all",
                elementType: "geometry.fill",
                stylers: [{ weight: "2.00" }],
              },
              {
                featureType: "all",
                elementType: "geometry.stroke",
                stylers: [{ color: "#9c9c9c" }],
              },
              {
                featureType: "all",
                elementType: "labels.text",
                stylers: [{ visibility: "on" }],
              },
              {
                featureType: "administrative",
                elementType: "all",
                stylers: [{ visibility: "on" }],
              }
            ],
          });
          
          // Add a marker for the specified location
          new window.google.maps.Marker({
            position: mapCenter as google.maps.LatLngLiteral,
            map: map,
            title: "TOTE Store - Mombasa",
          });
        }
      });
    }
    
    return () => {
      // Clean up the script when component unmounts
      const scripts = document.querySelectorAll('script[src*="maps.googleapis.com"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return <div ref={mapRef} className="w-full h-full rounded-lg"></div>;
};

export default GoogleMap;
