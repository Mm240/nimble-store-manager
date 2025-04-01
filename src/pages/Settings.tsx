
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';

const Settings: React.FC = () => {
  const { toast } = useToast();

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>
      
      <form onSubmit={handleSaveSettings}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Store Information</CardTitle>
            <CardDescription>
              Manage your store details and contact information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="storeName">Store Name</Label>
                <Input id="storeName" defaultValue="My Store" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storeEmail">Email Address</Label>
                <Input id="storeEmail" type="email" defaultValue="contact@mystore.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storePhone">Phone Number</Label>
                <Input id="storePhone" defaultValue="(555) 123-4567" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="storeWebsite">Website</Label>
                <Input id="storeWebsite" defaultValue="https://mystore.com" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Business Address</CardTitle>
            <CardDescription>
              Set your store's physical address.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="streetAddress">Street Address</Label>
              <Input id="streetAddress" defaultValue="123 Main St" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" defaultValue="Anytown" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State/Province</Label>
                <Input id="state" defaultValue="CA" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip/Postal Code</Label>
                <Input id="zipCode" defaultValue="12345" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Separator className="my-6" />
        
        <div className="flex justify-end">
          <Button type="submit">Save Settings</Button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
