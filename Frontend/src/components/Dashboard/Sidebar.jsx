import { useState, useEffect } from 'react'
import { User, Package, BarChart2, FileText, MessageSquare, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const menuItems = [
    { icon: User, label: 'Profile', path: '/users' },
    { icon: Package, label: 'Inventory', path: '/inventory' },
    { icon: BarChart2, label: 'Analytics', path: '/analytics' },
    { icon: FileText, label: 'Logs', path: '/logs' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: Settings, label: 'Settings', path: '/settings' }
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

  const handleNavigation = (path) => {
    navigate(path)
  }

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
          {menuItems.map((item, index) => {
            const isActive = location.pathname.startsWith(item.path)
            return (
              <button
                key={index}
                className={`flex items-center gap-4 p-3 rounded-lg text-foreground/60 hover:text-foreground transition-all duration-200 ease-in-out ${
                  isActive ? 'bg-accent text-foreground' : 'hover:bg-accent/50'
                } ${isCollapsed ? 'justify-center' : ''}`}
                onClick={() => handleNavigation(item.path)}
              >
                <item.icon className={`w-6 h-6 transition-all duration-200 ${
                  isActive ? 'text-primary' : ''
                }`} />
                {!isCollapsed && (
                  <span className={`transition-all duration-200 ${
                    isActive ? 'font-semibold' : ''
                  }`}>
                    {item.label}
                  </span>
                )}
              </button>
            )
          })}
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

export default Sidebar

