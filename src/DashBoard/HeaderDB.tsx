import {
  HomeIcon,
  MapIcon,
  CalendarIcon,
  ChartBarIcon,
  CogIcon,
  SparklesIcon, // ✨ for Plant.AI
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', icon: HomeIcon },
  { name: 'Floor Map', icon: MapIcon },
  { name: 'Calendar', icon: CalendarIcon },
  { name: 'Analytics', icon: ChartBarIcon },
  { name: 'Plant.AI', icon: SparklesIcon }, // 🌿 Added here
  { name: 'Settings', icon: CogIcon },
];

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-6 flex flex-col space-y-6 shadow-lg">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-semibold">Moonshot</span>
      </div>

      {/* Nav Items */}
      <nav className="flex flex-col space-y-4 mt-6">
        {navItems.map(({ name, icon: Icon }, idx) => (
          <a
            href="#"
            key={idx}
            className={`flex items-center space-x-3 hover:text-purple-300 ${
              idx === 0 ? 'text-purple-400 font-medium' : ''
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{name}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
