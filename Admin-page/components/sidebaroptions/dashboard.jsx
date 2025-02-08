import React from 'react';
import {
  Car,
  Users,
  MessageSquare,
  TrendingUp,
  DollarSign,
  Clock,
  AlertCircle
} from 'lucide-react';
import { Card, CardHeader, CardContent, CardActions } from '@mui/material';
import { Typography } from '@mui/material';


const Dashboard = () => {
  // Mock data - replace with real data from your backend
  const stats = [
    { title: 'Total Vehicles', value: '245', icon: Car, trend: '+12%' },
    { title: 'Active Customers', value: '1,234', icon: Users, trend: '+5%' },
    { title: 'New Messages', value: '28', icon: MessageSquare, trend: '+18%' },
    { title: 'Total Revenue', value: '$45,678', icon: DollarSign, trend: '+8%' }
  ];

  const recentVehicles = [
    { id: 1, name: '2024 BMW X5', price: '$75,000', status: 'Available', image: '/api/placeholder/200/120' },
    { id: 2, name: '2023 Tesla Model 3', price: '$45,000', status: 'Pending', image: '/api/placeholder/200/120' },
    { id: 3, name: '2024 Mercedes GLE', price: '$68,000', status: 'Available', image: '/api/placeholder/200/120' }
  ];

  const recentMessages = [
    { id: 1, user: 'John Doe', message: 'Interested in the BMW X5', time: '2h ago' },
    { id: 2, user: 'Sarah Smith', message: 'When can I schedule a test drive?', time: '3h ago' },
    { id: 3, user: 'Mike Johnson', message: 'Is the price negotiable?', time: '5h ago' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add New Vehicle
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                  <span className="text-sm text-green-500 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {stat.trend}
                  </span>
                </div>
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Vehicles */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Vehicles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentVehicles.map((vehicle) => (
              <div key={vehicle.id} className="border rounded-lg overflow-hidden">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold">{vehicle.name}</h3>
                  <p className="text-lg text-blue-600 font-bold mt-1">{vehicle.price}</p>
                  <span className={`inline-block px-2 py-1 rounded text-sm mt-2 ${
                    vehicle.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {vehicle.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Messages */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentMessages.map((message) => (
              <div key={message.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                <div className="bg-blue-100 rounded-full p-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{message.user}</h4>
                  <p className="text-gray-600 mt-1">{message.message}</p>
                  <span className="text-sm text-gray-500 flex items-center mt-2">
                    <Clock className="w-4 h-4 mr-1" />
                    {message.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;