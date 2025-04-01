
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarTrigger,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton 
} from "@/components/ui/sidebar";
import { Home, Box, ShoppingCart, Package, Settings } from 'lucide-react';

const sidebarItems = [
  {
    title: "Dashboard",
    icon: Home,
    path: "/"
  },
  {
    title: "Products",
    icon: Box,
    path: "/products"
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    path: "/orders"
  },
  {
    title: "Inventory",
    icon: Package,
    path: "/inventory"
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings"
  }
];

const AppSidebar: React.FC = () => {
  const location = useLocation();
  
  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Package className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold">StoreManager</span>
        </div>
        <SidebarTrigger className="block lg:hidden" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={location.pathname === item.path ? "bg-blue-50 text-blue-600" : ""}>
                    <Link to={item.path} className="flex items-center gap-3 px-3 py-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
