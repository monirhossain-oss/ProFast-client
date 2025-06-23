import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import districtData from '../../assets/warehouses.json';

// Fix for marker icon (React + Leaflet)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function FlyToDistrict({ position }) {
    const map = useMap();
    useEffect(() => {
        if (position) {
            map.flyTo(position, 10, { duration: 1.5 });
        }
    }, [position]);
    return null;
}

const MapWithMarkers = () => {
    const [searchText, setSearchText] = useState('');
    const [activeDistrict, setActiveDistrict] = useState(null);
    const markerRefs = useRef({});

    useEffect(() => {
        if (!searchText.trim()) return;

        const match = districtData.find((d) =>
            d.district.toLowerCase().includes(searchText.toLowerCase())
        );

        if (match) {
            setActiveDistrict(match);
        }
    }, [searchText]);

    useEffect(() => {
        if (activeDistrict) {
            const ref = markerRefs.current[activeDistrict.district];
            if (ref) ref.openPopup();
        }
    }, [activeDistrict]);

    return (
        <div className="space-y-4">
            {/* Search Box */}
            <div className="max-w-md mx-auto">
                <input
                    type="text"
                    placeholder="Search district..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-full border px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>

            {/* Map */}
            <div className="h-[300px] w-[70%] mx-auto rounded-xl overflow-hidden">
                <MapContainer
                    center={[23.685, 90.3563]}
                    zoom={7}
                    scrollWheelZoom={true}
                    className="h-full w-full"
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {districtData.map((district, index) => (
                        <Marker
                            key={index}
                            position={[district.latitude, district.longitude]}
                            ref={(ref) => (markerRefs.current[district.district] = ref)}
                        >
                            <Popup>
                                <div className="text-sm">
                                    <h3 className="font-bold">{district.district}</h3>
                                    <p><strong>City:</strong> {district.city}</p>
                                    <p><strong>Region:</strong> {district.region}</p>
                                    <p><strong>Covered Areas:</strong> {district.covered_area.join(', ')}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}

                    {/* Fly to searched district */}
                    {activeDistrict && (
                        <FlyToDistrict position={[activeDistrict.latitude, activeDistrict.longitude]} />
                    )}
                </MapContainer>
            </div>
        </div>
    );
};

export default MapWithMarkers;
