"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AddInventory() {
  const [categories, setCategories] = useState(["Clothing"]);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  const removeCategory = (categoryToRemove) => {
    setCategories(
      categories.filter((category) => category !== categoryToRemove)
    );
  };

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="text-sm text-muted-foreground mb-2">
          Inventory Management / Show all inventory
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Inventory</h1>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/inventory")}
            >
              Show Inventory
            </Button>
            <Button>Add Category</Button>
            <Button
              variant="outline"
              onClick={() => (window.location.href = "/inventory/location/add")}
            >
              Add Location
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="categories" className="space-y-6">
        <TabsList>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="categories">
          <Card className="p-6">
            <div className="space-y-6">
              <form onSubmit={handleAddCategory} className="flex gap-4">
                <Input
                  placeholder="Enter category name here"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="max-w-md"
                />
                <Button type="submit">Add</Button>
              </form>

              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center gap-2 bg-rose-100 text-rose-900 w-fit px-3 py-1.5 rounded-md"
                  >
                    {category}
                    <button
                      onClick={() => removeCategory(category)}
                      className="hover:bg-rose-200 rounded-full p-0.5"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              {categories.length === 0 && (
                <Alert>
                  <AlertTitle>No categories added</AlertTitle>
                  <AlertDescription>
                    Add your first category using the form above.
                  </AlertDescription>
                </Alert>
              )}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
