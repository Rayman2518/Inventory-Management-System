import { useState } from 'react'
import { User, Package, BarChart2, FileText, MessageSquare, Settings, LogOut } from 'lucide-react'

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const menuItems = [
    { icon: User, label: 'Profile' },
    { icon: Package, label: 'Inventory' },
    { icon: BarChart2, label: 'Analytics' },
    { icon: FileText, label: 'Reports' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: Settings, label: 'Settings' }
  ]

  return (
    <aside className={`h-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r border-border flex flex-col justify-between p-4 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="flex flex-col gap-4">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="p-2 hover:bg-accent rounded-lg self-end"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className="h-0.5 w-full bg-foreground rounded-full" />
            <span className="h-0.5 w-full bg-foreground rounded-full" />
            <span className="h-0.5 w-full bg-foreground rounded-full" />
          </div>
        </button>
        
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-4 p-2 hover:bg-accent rounded-lg text-foreground/60 hover:text-foreground transition-colors"
            >
              <item.icon className="w-5 h-5" />
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      <button className="flex items-center gap-4 p-2 hover:bg-accent rounded-lg text-foreground/60 hover:text-foreground transition-colors">
        <LogOut className="w-5 h-5" />
        {!isCollapsed && <span>Logout</span>}
      </button>
    </aside>
  )
}

export default Sidebar;