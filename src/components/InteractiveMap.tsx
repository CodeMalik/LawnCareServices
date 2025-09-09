'use client';

import React from 'react'; // ✅ REQUIRED — fixes JSX.Element error
import {
    MapPin,
    Fullscreen,
    Minimize2,
    Map as MapIcon,
    Satellite,
    Navigation,
} from 'lucide-react';

// ✅ Define Location interface
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

// ✅ Define component props interface
interface InteractiveMapProps {
    selectedLocation: Location | null;
    onLocationChange?: (location: Location) => void;
    locations?: Location[];
}

// ✅ Main component — fully typed, no explicit return type needed
export default function InteractiveMap({
    selectedLocation,
    onLocationChange,
    locations = [],
}: InteractiveMapProps) {
    // ✅ State for fullscreen and map view
    const [isFullscreen, setIsFullscreen] = React.useState<boolean>(false);
    const [mapView, setMapView] = React.useState<'map' | 'satellite'>('map');

    // ✅ Refs for map container and iframe
    const mapContainerRef = React.useRef<HTMLDivElement>(null);
    const mapRef = React.useRef<HTMLIFrameElement>(null);

    // ✅ Toggle fullscreen mode
    const toggleFullscreen = (): void => {
        if (!document.fullscreenElement) {
            mapContainerRef.current
                ?.requestFullscreen()
                .catch((err: Error) => {
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

    // ✅ Toggle between map and satellite view
    const toggleMapView = (): void => {
        setMapView((prev) => (prev === 'map' ? 'satellite' : 'map'));
    };

    // ✅ Handle "Use My Location" button
    const handleUseMyLocation = (): void => {
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
                (error: GeolocationPositionError) => {
                    console.error('Error getting location:', error);
                    alert(
                        'Unable to retrieve your location. Please make sure location services are enabled.'
                    );
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

    // ✅ Generate map URL (OpenStreetMap)
    const getMapUrl = (location: Location): string => {
        const baseUrl = 'https://www.openstreetmap.org/export/embed.html'; // ✅ Cleaned URL
        const bbox = `${location.lng - 0.01},${location.lat - 0.01},${location.lng + 0.01},${location.lat + 0.01}`;
        const marker = `${location.lat},${location.lng}`;
        return `${baseUrl}?bbox=${bbox}&layer=${mapView === 'satellite' ? 'satellite' : 'mapnik'}&marker=${marker}`;
    };

    // ✅ Handle fullscreen change
    React.useEffect(() => {
        const handleFullscreenChange = (): void => {
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
            role="region"
            aria-label="Interactive map for location selection"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div
                    className={`${
                        isFullscreen ? 'h-screen' : 'h-64 sm:h-96 md:h-[500px]'
                    } bg-blue-100 rounded-lg mb-8 relative overflow-hidden`}
                >
                    {/* Map Controls */}
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                        <div className="bg-white rounded-md shadow-md overflow-hidden" role="group">
                            <button
                                onClick={toggleMapView}
                                className={`px-3 py-2 text-sm cursor-pointer font-medium flex items-center ${
                                    mapView === 'map'
                                        ? 'text-green-600 bg-green-50'
                                        : 'text-gray-700 hover:bg-gray-50'
                                }`}
                                aria-pressed={mapView === 'map'}
                                aria-label="Switch to map view"
                            >
                                <MapIcon className="h-4 w-4 inline-block mr-1" aria-hidden="true" />
                                Map
                            </button>
                            <button
                                onClick={toggleMapView}
                                className={`px-3 py-2 text-sm cursor-pointer font-medium flex items-center ${
                                    mapView === 'satellite'
                                        ? 'text-green-600 bg-green-50'
                                        : 'text-gray-700 hover:bg-gray-50'
                                } border-t border-gray-200`}
                                aria-pressed={mapView === 'satellite'}
                                aria-label="Switch to satellite view"
                            >
                                <Satellite
                                    className="h-4 w-4 inline-block mr-1"
                                    aria-hidden="true"
                                />
                                Satellite
                            </button>
                            <button
                                onClick={handleUseMyLocation}
                                className="px-3 py-2 text-sm cursor-pointer font-medium text-gray-700 border-t border-gray-200 hover:bg-gray-50 w-full text-left flex items-center"
                                aria-label="Use my current location"
                            >
                                <Navigation
                                    className="h-4 w-4 inline-block mr-1 text-blue-500"
                                    aria-hidden="true"
                                />
                                My Location
                            </button>
                        </div>
                    </div>

                    {/* Fullscreen Toggle */}
                    <button
                        onClick={toggleFullscreen}
                        className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label={isFullscreen ? 'Exit fullscreen' : 'View fullscreen'}
                    >
                        {isFullscreen ? (
                            <Minimize2 className="w-5 h-5" aria-hidden="true" />
                        ) : (
                            <Fullscreen className="w-5 h-5" aria-hidden="true" />
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
                                aria-label={`Map showing ${selectedLocation.name}`}
                            />
                        ) : (
                            <div className="h-full w-full flex items-center justify-center bg-gray-100">
                                <div className="text-center" role="status">
                                    <MapPin
                                        className="h-16 w-16 text-gray-400 mx-auto mb-4"
                                        aria-hidden="true"
                                    />
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