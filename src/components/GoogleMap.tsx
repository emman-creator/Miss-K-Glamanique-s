
import React, { useEffect, useRef } from "react";

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
          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 40.712776, lng: -74.005974 }, // New York coordinates
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
          
          // Add a marker for the store location
          new window.google.maps.Marker({
            position: { lat: 40.712776, lng: -74.005974 },
            map: map,
            title: "TOTE Store",
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
