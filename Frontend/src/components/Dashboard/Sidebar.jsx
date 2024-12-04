import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Package, BarChart2, FileText, MessageSquare, Settings, LogOut, ChevronLeft, ChevronRight } from 'lucide-react'

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

  const sidebarVariants = {
    expanded: { width: '16rem' },
    collapsed: { width: '5rem' }
  }

  const chevronVariants = {
    expanded: { rotate: 0 },
    collapsed: { rotate: 180 }
  }

  return (
    <motion.aside
      initial="expanded"
      animate={isCollapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen bg-gradient-to-b from-background/95 to-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r border-border flex flex-col justify-between py-6 px-4 overflow-hidden"
    >
      <div className="flex flex-col gap-8">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCollapsed(!isCollapsed)} 
          className="p-2 hover:bg-accent rounded-full self-end transition-colors duration-200 ease-in-out"
        >
          <motion.div
            variants={chevronVariants}
            transition={{ duration: 0.3 }}
          >
            {isCollapsed ? <ChevronRight className="w-6 h-6 text-foreground" /> : <ChevronLeft className="w-6 h-6 text-foreground" />}
          </motion.div>
        </motion.button>
        
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 p-3 hover:bg-accent rounded-lg text-foreground/60 hover:text-foreground transition-all duration-200 ease-in-out group"
            >
              <item.icon className="w-6 h-6 transition-colors duration-200 ease-in-out group-hover:text-primary" />
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: isCollapsed ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="whitespace-nowrap overflow-hidden"
              >
                {item.label}
              </motion.span>
            </motion.button>
          ))}
        </nav>
      </div>

      <motion.button
        whileHover={{ scale: 1.05, x: 5 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-4 p-3 hover:bg-accent rounded-lg text-foreground/60 hover:text-foreground transition-all duration-200 ease-in-out group mt-auto"
      >
        <LogOut className="w-6 h-6 transition-colors duration-200 ease-in-out group-hover:text-primary" />
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: isCollapsed ? 0 : 1 }}
          transition={{ duration: 0.2 }}
          className="whitespace-nowrap overflow-hidden"
        >
          Logout
        </motion.span>
      </motion.button>
    </motion.aside>
  )
}

export default Sidebar

