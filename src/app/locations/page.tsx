'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search, Globe, Briefcase, Eye } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import LastCTA from '@/components/LastCTA';

interface Location {
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

const MAIN_WEBSITE_URL = 'https://www.augustalawncareservices.com';

// Updated locations with specific entries and top 10 cities
const locations: Location[] = [
    { id: '1', name: 'Augusta Lawn Care of Columbia', city: 'Columbia', state: 'SC', zipCode: '29223', phone: '803.780.4459', lat: 34.0007, lng: -81.0348 },
    { id: '2', name: 'Augusta Lawn Care of Virginia Beach', city: 'Virginia Beach', state: 'VA', zipCode: '23456', phone: '757.918.7800', lat: 36.8529, lng: -75.9780 },
    { id: '3', name: 'Augusta Lawn Care of Minneapolis', city: 'Minneapolis', state: 'MN', zipCode: '55401', phone: '612.555.0140', lat: 44.9778, lng: -93.2650 },
    { id: '4', name: 'Augusta Lawn Care of Milwaukee', city: 'Milwaukee', state: 'WI', zipCode: '53201', phone: '414.555.0139', lat: 43.0389, lng: -87.9065 },
    { id: '5', name: 'Augusta Lawn Care of Detroit', city: 'Detroit', state: 'MI', zipCode: '48201', phone: '313.555.0130', lat: 42.3601, lng: -83.0750 },
    { id: '6', name: 'Augusta Lawn Care of Augusta', city: 'Augusta', state: 'GA', zipCode: '30904', phone: '706.432.1001', lat: 33.6500, lng: -82.0000 },
    { id: '7', name: 'Augusta Lawn Care of Charlotte', city: 'Charlotte', state: 'NC', zipCode: '28201', phone: '704.555.0125', lat: 35.1696, lng: -80.8896 },
    { id: '8', name: 'Augusta Lawn Care of Omaha', city: 'Omaha', state: 'NE', zipCode: '68101', phone: '402.555.0144', lat: 41.2565, lng: -95.9345 },
    { id: '9', name: 'Augusta Lawn Care of Indianapolis', city: 'Indianapolis', state: 'IN', zipCode: '46201', phone: '317.555.0132', lat: 39.7684, lng: -86.1581 },
    { id: '10', name: 'Augusta Lawn Care of Wilmington', city: 'Wilmington', state: 'DE', zipCode: '19801', phone: '302.555.0145', lat: 39.7459, lng: -75.5466 },
    { id: '11', name: 'Augusta Lawn Care in Nocatee', city: 'Nocatee', state: 'FL', zipCode: '32081', phone: '904.917.2525', lat: 32.2216, lng: -81.3696 },
    { id: '12', name: 'Augusta Lawn Care of Aiken', city: 'Aiken', state: 'SC', zipCode: '29805', phone: '803.850.4642', lat: 34.8522, lng: -81.1437 },
    { id: '13', name: 'Augusta Lawn Care of Alexandria', city: 'Alexandria', state: 'VA', zipCode: '22206', phone: '703.870.3434', lat: 38.8022, lng: -77.0369 },
    { id: '14', name: 'Augusta Lawn Care of Augusta Maine', city: 'Augusta', state: 'ME', zipCode: '04330', phone: '207.888.2505', lat: 44.2678, lng: -69.9048 },
    { id: '15', name: 'Augusta Lawn Care of Baton Rouge', city: 'Baton Rouge', state: 'LA', zipCode: '70815', phone: '225.306.3015', lat: 30.6622, lng: -91.2183 },
    { id: '16', name: 'Augusta Lawn Care of Bentonville', city: 'Bentonville', state: 'AR', zipCode: '72712', phone: '479.332.3003', lat: 36.2678, lng: -94.1667 },
    { id: '17', name: 'Augusta Lawn Care of Biloxi', city: 'Biloxi', state: 'MS', zipCode: '39530', phone: '228.357.0164', lat: 30.2678, lng: -88.2183 },
    { id: '18', name: 'Augusta Lawn Care of Bloomingdale', city: 'Bloomingdale', state: 'NJ', zipCode: '07403', phone: '973.954.9590', lat: 40.7128, lng: -74.0060 },
    { id: '19', name: 'Augusta Lawn Care of Birmingham', city: 'Birmingham', state: 'AL', zipCode: '35203', phone: '205.555.0123', lat: 33.5206, lng: -86.8024 },
    { id: '20', name: 'Augusta Lawn Care of Boston', city: 'Boston', state: 'MA', zipCode: '02101', phone: '617.555.0124', lat: 42.3601, lng: -71.0589 },
    { id: '21', name: 'Augusta Lawn Care of Chicago', city: 'Chicago', state: 'IL', zipCode: '60601', phone: '312.555.0126', lat: 41.8781, lng: -87.6298 },
    { id: '22', name: 'Augusta Lawn Care of Columbus', city: 'Columbus', state: 'OH', zipCode: '43085', phone: '614.555.0127', lat: 39.9612, lng: -83.0000 },
    { id: '23', name: 'Augusta Lawn Care of Dallas', city: 'Dallas', state: 'TX', zipCode: '75201', phone: '214.555.0128', lat: 32.7767, lng: -96.7970 },
    { id: '24', name: 'Augusta Lawn Care of Denver', city: 'Denver', state: 'CO', zipCode: '80014', phone: '303.555.0129', lat: 39.7392, lng: -104.9903 },
    { id: '25', name: 'Augusta Lawn Care of Houston', city: 'Houston', state: 'TX', zipCode: '77001', phone: '713.555.0131', lat: 29.7604, lng: -95.3698 },
    { id: '26', name: 'Augusta Lawn Care of Jacksonville', city: 'Jacksonville', state: 'FL', zipCode: '32099', phone: '904.555.0133', lat: 30.3322, lng: -81.6556 },
    { id: '27', name: 'Augusta Lawn Care of Kansas City', city: 'Kansas City', state: 'MO', zipCode: '64030', phone: '816.555.0134', lat: 39.0997, lng: -94.5786 },
    { id: '28', name: 'Augusta Lawn Care of Las Vegas', city: 'Las Vegas', state: 'NV', zipCode: '89101', phone: '702.555.0135', lat: 36.1699, lng: -115.1398 },
    { id: '29', name: 'Augusta Lawn Care of Los Angeles', city: 'Los Angeles', state: 'CA', zipCode: '90001', phone: '213.555.0136', lat: 34.0522, lng: -118.2437 },
    { id: '30', name: 'Augusta Lawn Care of Memphis', city: 'Memphis', state: 'TN', zipCode: '38101', phone: '901.555.0137', lat: 35.1696, lng: -89.9680 },
    { id: '31', name: 'Augusta Lawn Care of Miami', city: 'Miami', state: 'FL', zipCode: '33101', phone: '305.555.0138', lat: 25.7678, lng: -80.1260 },
    { id: '32', name: 'Augusta Lawn Care of Nashville', city: 'Nashville', state: 'TN', zipCode: '37201', phone: '615.555.0141', lat: 36.1699, lng: -86.7826 },
    { id: '33', name: 'Augusta Lawn Care of New Orleans', city: 'New Orleans', state: 'LA', zipCode: '70112', phone: '504.555.0142', lat: 30.0572, lng: -89.9616 },
    { id: '34', name: 'Augusta Lawn Care of New York', city: 'New York', state: 'NY', zipCode: '10001', phone: '212.555.0143', lat: 40.7128, lng: -74.0060 },
    // Add more locations to reach 150+ as needed...
];

// Add website and careers URLs based on city names
locations.forEach(location => {
    const citySlug = location.city.toLowerCase().replace(/\s+/g, '-');
    location.website = `${MAIN_WEBSITE_URL}/${citySlug}`;
    location.careers = `${MAIN_WEBSITE_URL}/careers/${citySlug}`;
});

const topCities = ['Columbia', 'Virginia Beach', 'Minneapolis', 'Milwaukee', 'Detroit', 'Augusta', 'Charlotte', 'Omaha', 'Indianapolis', 'Wilmington'];

const LocationsPage = () => {
    const [searchAddress, setSearchAddress] = useState('');
    const [filteredLocations, setFilteredLocations] = useState(locations);
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
    const [userLocation, setUserLocation] = useState<{ lat: number, lng: number } | null>(null);
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Filter locations based on search
        if (searchAddress.trim()) {
            const filtered = locations.filter(location =>
                location.city.toLowerCase().includes(searchAddress.toLowerCase()) ||
                location.state.toLowerCase().includes(searchAddress.toLowerCase()) ||
                location.zipCode.includes(searchAddress) ||
                location.name.toLowerCase().includes(searchAddress.toLowerCase())
            );
            setFilteredLocations(filtered);
        } else {
            setFilteredLocations(locations);
        }
    }, [searchAddress]);

    const handleMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    // Sort locations by distance
                    const sortedLocations = [...locations].sort((a, b) => {
                        const distA = Math.sqrt(
                            Math.pow(a.lat - position.coords.latitude, 2) +
                            Math.pow(a.lng - position.coords.longitude, 2)
                        );
                        const distB = Math.sqrt(
                            Math.pow(b.lat - position.coords.latitude, 2) +
                            Math.pow(b.lng - position.coords.longitude, 2)
                        );
                        return distA - distB;
                    });
                    setFilteredLocations(sortedLocations);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    alert('Unable to get your location');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser');
        }
    };

    const showOnMap = (location: Location) => {
        setSelectedLocation(location);
        // Scroll to map
        mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Split locations into top locations and others
    const topLocations = locations.filter(location => topCities.includes(location.city));
    const otherLocations = filteredLocations.filter(location => !topCities.includes(location.city));

    return (
        <>
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <HeroSection 
                Herotitle="AUGUSTA LAWN CARE LOCATIONS" 
                Herodescription="Find the nearest Augusta Lawn Care location to your location." 
                HerobgImage="https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/1_w9p5t6_10_11zon_ii2yyf.jpg" 
            />
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-center text-green-600 mb-8"
                    >
                        AUGUSTA LAWN CARE LOCATIONS
                    </motion.h1>

                    {/* Search Section */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                        <div className="flex items-center gap-2">
                            <span className="text-gray-700 font-medium">FIND LOCATIONS NEAR:</span>
                            <button
                                onClick={handleMyLocation}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
                            >
                                <MapPin className="h-4 w-4" />
                                My Location
                            </button>
                        </div>

                        <div className="relative flex-1 max-w-md">
                            <input
                                type="text"
                                placeholder="Enter an address"
                                value={searchAddress}
                                onChange={(e) => setSearchAddress(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            {searchAddress && (
                                <button
                                    onClick={() => setSearchAddress('')}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    ×
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="bg-white" ref={mapRef}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="h-96 bg-blue-100 rounded-lg mb-8 relative overflow-hidden">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden h-[500px]">
                            {selectedLocation ? (
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${selectedLocation.lng - 0.01}%2C${selectedLocation.lat - 0.01}%2C${selectedLocation.lng + 0.01}%2C${selectedLocation.lat + 0.01}&amp;layer=mapnik&marker=${selectedLocation.lat}%2C${selectedLocation.lng}`}
                                    className="border-0"
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
                        {/* Map Controls */}
                        <div className="absolute top-4 left-4 bg-white rounded-md shadow-md">
                            <button className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border-r border-gray-200">
                                Map
                            </button>
                            <button className="px-3 py-2 text-sm font-medium text-gray-500">
                                Satellite
                            </button>
                        </div>

                        {/* Fullscreen button */}
                        <button className="absolute top-4 right-4 bg-white p-2 rounded-md shadow-md hover:bg-gray-50">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Top Locations Section */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold text-green-600 mb-6">Top Locations for Lawn Care Services</h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                    {topLocations.map((location) => (
                        <motion.div
                            key={location.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -4 }}
                            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <h3 className="text-green-600 font-semibold text-lg mb-1 leading-tight">
                                {location.name}
                            </h3>
                            <p className="text-gray-600 mb-1">
                                {location.city}, {location.state} {location.zipCode}
                            </p>
                            <p className="text-gray-800 font-medium mb-4">
                                📞 {location.phone}
                            </p>

                            <div className="space-y-2">
                                <a
                                    href={location.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
                                >
                                    <Globe className="h-4 w-4" />
                                    Website
                                </a>

                                <a
                                    href={location.careers}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
                                >
                                    <Briefcase className="h-4 w-4" />
                                    Careers
                                </a>

                                <button
                                    onClick={() => showOnMap(location)}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
                                >
                                    <Eye className="h-4 w-4" />
                                    Show on Map
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Other Locations */}
                <h2 className="text-2xl font-bold text-green-600 mb-6">All Locations</h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {otherLocations.map((location) => (
                        <motion.div
                            key={location.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -4 }}
                            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200"
                        >
                            <h3 className="text-green-600 font-semibold text-lg mb-1 leading-tight">
                                {location.name}
                            </h3>
                            <p className="text-gray-600 mb-1">
                                {location.city}, {location.state} {location.zipCode}
                            </p>
                            <p className="text-gray-800 font-medium mb-4">
                                📞 {location.phone}
                            </p>

                            <div className="space-y-2">
                                <a
                                    href={location.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
                                >
                                    <Globe className="h-4 w-4" />
                                    Website
                                </a>

                                <a
                                    href={location.careers}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
                                >
                                    <Briefcase className="h-4 w-4" />
                                    Careers
                                </a>

                                <button
                                    onClick={() => showOnMap(location)}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
                                >
                                    <Eye className="h-4 w-4" />
                                    Show on Map
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredLocations.length === 0 && (
                    <div className="text-center py-12">
                        <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-gray-600 mb-2">No locations found</h3>
                        <p className="text-gray-500">Try adjusting your search terms</p>
                    </div>
                )}

                {/* Results count */}
                <div className="text-center mt-8 text-gray-600">
                    Showing {filteredLocations.length} of {locations.length} locations
                </div>
            </div>

            
        </div>
        <LastCTA 
                bgImage="https://res.cloudinary.com/dfnjpfucl/image/upload/v1755519842/1_w9p5t6_10_11zon_ii2yyf.jpg" 
                title="From Lawn to Lush, Let’s Begin!" 
                description="Whether its lush lawn care, expert sprinkler repair, or full-scale landscaping, Lawn Care Services is here to help your yard thrive." 
                ctaText="Call Now To Get Started" 
            />
        </>
    );
};

export default LocationsPage;