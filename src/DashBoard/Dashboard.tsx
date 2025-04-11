import {
  ArrowUpRightIcon
} from '@heroicons/react/24/solid';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const chartData = [
  { date: 'Jan 16', mass: 70 },
  { date: 'Jan 18', mass: 85 },
  { date: 'Jan 20', mass: 95 },
  { date: 'Jan 23', mass: 100 },
  { date: 'Jan 26', mass: 107 },
  { date: 'Jan 29', mass: 111 },
  { date: 'Feb 1', mass: 114 },
];

const statCards = [
  { label: 'Irrigation', value: '16 Jan' },
  { label: 'Soil Composition Test', value: '31 Jan'},
  { label: 'Fertilizing', value: '2 Feb', highlight: true },
  { label: 'Next Irrigation ', value: 'till harvesting' },
];

const metricCards = [
  { label: 'Target', value: '120 g', color: 'text-purple-600' },
  { label: 'Avg Fresh Mass', value: '114.16 g' },
  {
    label: 'Growth Rate',
    value: '+12.5%',
    color: 'text-green-500',
    icon: <ArrowUpRightIcon className="h-5 w-5" />,
    subtext: 'from yesterday, Feb 1'
  },
];

export default function Dashboard() {
  return (
    <main className="p-6 bg-gray-100 min-h-screen text-gray-800 flex-1">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Cycle 732 (Day 29)</h2>
        <p className="text-sm text-gray-500">Lettuce Green Butter · 1024 plants</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-2xl shadow-md flex flex-col justify-between"
          >
            <p className="text-sm text-gray-500">{card.label}</p>
            <div className="flex items-center justify-between">
              <h3 className={`text-lg font-bold ${card.highlight ? 'text-purple-600' : 'text-gray-800'}`}>{card.value}</h3>
              {card.highlight && (
                <button className="px-3 py-1 bg-purple-600 text-white text-xs rounded-xl">Harvest</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {metricCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-2xl shadow-md flex flex-col gap-1"
          >
            <p className="text-sm text-gray-500">{card.label}</p>
            <div className="flex items-center space-x-2">
              {card.icon}
              <h3 className={`text-2xl font-bold ${card.color || 'text-gray-800'}`}>{card.value}</h3>
            </div>
            {card.subtext && <p className="text-xs text-gray-500">{card.subtext}</p>}
          </div>
        ))}
      </div>

      <div className="bg-white mt-6 p-6 rounded-2xl shadow-md">
        <p className="text-sm text-gray-500 mb-4">Soil Quality (Jan 16 - Feb 1)</p>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[20, 100]} unit="%" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="mass"
                stroke="#9333ea"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}
