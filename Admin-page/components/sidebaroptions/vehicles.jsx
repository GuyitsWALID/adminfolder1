import React, { useState } from 'react';
import { Search, Filter, Plus, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VehiclesPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  // Mock data - replace with your actual data
  const vehicles = [
    {
      id: 1,
      name: '2024 BMW X5',
      price: 75000,
      mileage: '15,000',
      year: 2024,
      status: 'Available',
      fuelType: 'Petrol',
      transmission: 'Automatic',
      location: 'New York, NY',
      image: '/api/placeholder/300/200'
    },
    {
      id: 2,
      name: '2023 Tesla Model 3',
      price: 45000,
      mileage: '5,000',
      year: 2023,
      status: 'Pending',
      fuelType: 'Electric',
      transmission: 'Automatic',
      location: 'Los Angeles, CA',
      image: '/api/placeholder/300/200'
    },
    // Add more vehicles as needed
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Vehicles</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Vehicle
        </button>
      </div>

      {/* Search and Filter Bar */}
      <div className="mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search vehicles..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <Card className="mt-4">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Any Price</option>
                    <option>$0 - $30,000</option>
                    <option>$30,000 - $60,000</option>
                    <option>$60,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Year</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Any Year</option>
                    <option>2024</option>
                    <option>2023</option>
                    <option>2022</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Status</label>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Any Status</option>
                    <option>Available</option>
                    <option>Pending</option>
                    <option>Sold</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="overflow-hidden">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">{vehicle.name}</h3>
                <span className={`px-2 py-1 rounded text-sm ${
                  vehicle.status === 'Available' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {vehicle.status}
                </span>
              </div>
              <p className="text-xl font-bold text-blue-600 mb-2">
                ${vehicle.price.toLocaleString()}
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <div>Year: {vehicle.year}</div>
                <div>Mileage: {vehicle.mileage}</div>
                <div>Fuel: {vehicle.fuelType}</div>
                <div>Transmission: {vehicle.transmission}</div>
              </div>
              <p className="text-sm text-gray-500 mt-2">{vehicle.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VehiclesPage;