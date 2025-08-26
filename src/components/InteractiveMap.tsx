'use client';

import { useState, useRef, useEffect } from 'react';
import { MapPin, Fullscreen, Minimize2, Map as MapIcon, Satellite, Navigation } from 'lucide-react';

export interface Location {
  id: string;
  name: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  lat: number;
  lng: number;
  website?: string;
  careers?: string;
}

interface InteractiveMapProps {
  selectedLocation: Location | null;
  onLocationChange?: (location: Location) => void;
  locations?: Location[];
}

export default function InteractiveMap({ selectedLocation, onLocationChange, locations = [] }: InteractiveMapProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapView, setMapView] = useState<'map' | 'satellite'>('map');
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLIFrameElement>(null);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      mapContainerRef.current?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const toggleMapView = () => {
    setMapView(prev => prev === 'map' ? 'satellite' : 'map');
  };

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation: Location = {
            id: 'my-location',
            name: 'My Location',
            city: '',
            state: '',
            zipCode: '',
            phone: '',
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          onLocationChange?.(userLocation);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to retrieve your location. Please make sure location services are enabled.');
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      alert('Geolocation is not supported by your browser');
    }
  };

  const getMapUrl = (location: Location) => {
    const baseUrl = 'https://www.openstreetmap.org/export/embed.html';
    const bbox = `${location.lng - 0.01},${location.lat - 0.01},${location.lng + 0.01},${location.lat + 0.01}`;
    const marker = `${location.lat},${location.lng}`;
    return `${baseUrl}?bbox=${bbox}&layer=mapnik&marker=${marker}`;
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  return (
    <div 
      ref={mapContainerRef}
      className={`bg-white ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div 
          className={`${isFullscreen ? 'h-screen' : 'h-64 sm:h-96 md:h-[500px]'} bg-blue-100 rounded-lg mb-8 relative overflow-hidden`}
        >
          {/* Map Controls */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
            <div className="bg-white rounded-md shadow-md overflow-hidden">
              <button 
                onClick={toggleMapView}
                className={`px-3 py-2 text-sm cursor-pointer font-medium ${mapView === 'map' ? 'text-green-600 bg-green-50' : 'text-gray-700'}`}
              >
                <MapIcon className="h-4 w-4 inline-block mr-1" />
                Map
              </button>
              <button 
                onClick={toggleMapView}
                className={`px-3 py-2 text-sm cursor-pointer font-medium ${mapView === 'satellite' ? 'text-green-600 bg-green-50' : 'text-gray-700'} border-t border-gray-200`}
              >
                <Satellite className="h-4 w-4 inline-block mr-1" />
                Satellite
              </button>
              <button 
                onClick={handleUseMyLocation}
                className="px-3 py-2 text-sm cursor-pointer font-medium text-gray-700 border-t border-gray-200 hover:bg-gray-50 w-full text-left flex items-center"
              >
                <Navigation className="h-4 w-4 inline-block mr-1 text-blue-500" />
                My Location
              </button>
            </div>
          </div>
          
          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Fullscreen className="w-5 h-5" />
            )}
          </button>

          {/* Map */}
          <div className="h-full w-full">
            {selectedLocation ? (
              <iframe
                ref={mapRef}
                width="100%"
                height="100%"
                src={getMapUrl(selectedLocation)}
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Select a location to view on map</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}