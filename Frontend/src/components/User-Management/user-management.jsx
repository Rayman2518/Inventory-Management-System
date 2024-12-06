"use client"

import { useState } from 'react'
import { Plus, Users } from 'lucide-react'
import { Button } from "@/components/ui/button.jsx"
import { Card } from "@/components/ui/card.jsx"
import UserForm from './user-form'

export default function UserManagement() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="text-sm text-muted-foreground mb-2">
          Admin User Management / {showForm ? 'Add user' : 'All users'}
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">
            {showForm ? 'Add new User' : 'All Users'}
          </h1>
          <div className="flex gap-2">
            <Button
              variant={showForm ? "default" : "outline"}
              onClick={() => setShowForm(true)}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Add User
            </Button>
            <Button
              variant={!showForm ? "default" : "outline"}
              onClick={() => setShowForm(false)}
              className="gap-2"
            >
              <Users className="h-4 w-4" />
              All Users
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <Card className="p-6">
        {showForm ? (
          <UserForm />
        ) : (
          <div className="text-center text-muted-foreground py-12">
            User list will be displayed here
          </div>
        )}
      </Card>
    </div>
  )
}

