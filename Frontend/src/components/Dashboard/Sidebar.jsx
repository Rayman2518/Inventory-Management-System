import { useState, useEffect } from 'react'
import { User, Package, BarChart2, FileText, MessageSquare, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react'

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState(null)

  const menuItems = [
    { icon: User, label: 'Profile' },
    { icon: Package, label: 'Inventory' },
    { icon: BarChart2, label: 'Analytics' },
    { icon: FileText, label: 'Reports' },
    { icon: MessageSquare, label: 'Messages' },
    { icon: Settings, label: 'Settings' }
  ]

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <aside 
      className={`h-screen bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r border-border flex flex-col justify-between py-6 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex flex-col gap-6">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className={`p-2 hover:bg-accent rounded-full self-end mr-4 transition-transform duration-300 ${
            isCollapsed ? '-rotate-180' : ''
          }`}
        >
          {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
        
        <nav className="flex flex-col gap-2 px-4">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`flex items-center gap-4 p-3 rounded-lg text-foreground/60 hover:text-foreground transition-all duration-200 ease-in-out ${
                activeItem === index ? 'bg-accent text-foreground' : 'hover:bg-accent/50'
              } ${isCollapsed ? 'justify-center' : ''}`}
              onClick={() => setActiveItem(index)}
            >
              <item.icon className={`w-6 h-6 transition-all duration-200 ${
                activeItem === index ? 'text-primary' : ''
              }`} />
              {!isCollapsed && (
                <span className={`transition-all duration-200 ${
                  activeItem === index ? 'font-semibold' : ''
                }`}>
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <button 
        className={`flex items-center gap-4 p-3 mx-4 rounded-lg text-foreground/60 hover:text-foreground hover:bg-accent/50 transition-all duration-200 ease-in-out ${
          isCollapsed ? 'justify-center' : ''
        }`}
      >
        <LogOut className="w-6 h-6" />
        {!isCollapsed && <span>Logout</span>}
      </button>
    </aside>
  )
}
export default Sidebar;

