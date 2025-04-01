
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatsCard from '@/components/dashboard/StatsCard';
import RecentOrdersTable from '@/components/dashboard/RecentOrdersTable';
import { dashboardStats, orders as mockOrders } from '@/data/mockData';
import { DollarSign, Package, ShoppingCart, AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const recentOrders = mockOrders.slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard 
          title="Total Sales" 
          value={`$${dashboardStats.totalSales.toFixed(2)}`} 
          icon={DollarSign}
          description="Last 30 days"
        />
        <StatsCard 
          title="Total Orders" 
          value={dashboardStats.totalOrders} 
          icon={ShoppingCart}
          description="Last 30 days"
        />
        <StatsCard 
          title="Average Order" 
          value={`$${dashboardStats.averageOrder.toFixed(2)}`} 
          icon={ShoppingCart}
          description="Last 30 days"
        />
        <StatsCard 
          title="Low Stock Items" 
          value={dashboardStats.lowStock} 
          icon={AlertTriangle}
          description="Items below threshold"
          className="border-yellow-200 bg-yellow-50"
        />
      </div>
      
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentOrdersTable orders={recentOrders} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
