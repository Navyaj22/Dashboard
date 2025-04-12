// Frontend: React UI for PlantGPT Chatbot with Sensor Integration (Frontend Only, TSX)
import { useState, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface SensorData {
  temperature: number;
  humidity: number;
  moisture: number;
}

export default function PlantGPTChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: 'Hi! I\'m PlantGPT 🌱. Ask me anything about plant care, watering, or soil health.' }
  ]);
  const [input, setInput] = useState<string>('');
  const [sensorData, setSensorData] = useState<SensorData | null>(null);

  useEffect(() => {
    // Simulated sensor data for frontend demo
    const simulatedData: SensorData = {
      temperature: 24,
      humidity: 60,
      moisture: 45
    };
    setSensorData(simulatedData);

    const interval = setInterval(() => {
      setSensorData({
        temperature: simulatedData.temperature + Math.round(Math.random() * 2 - 1),
        humidity: simulatedData.humidity + Math.round(Math.random() * 2 - 1),
        moisture: simulatedData.moisture + Math.round(Math.random() * 2 - 1)
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { role: 'user', content: input }];
    setMessages([
      ...newMessages,
      {
        role: 'assistant',
        content: 'Thanks for your question! 🌱 I\'ll get back with some plant care advice soon.'
      }
    ]);
    setInput('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '2rem', color: 'green', marginBottom: '1rem' }}>🌿 PlantGPT Assistant</h1>
      {sensorData && (
        <div style={{ background: '#e0f7da', padding: '0.5rem', borderRadius: '8px', marginBottom: '1rem' }}>
          🌡️ Temp: {sensorData.temperature}°C | 💧 Humidity: {sensorData.humidity}% | 🌱 Soil Moisture: {sensorData.moisture}%
        </div>
      )}
      <div style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '8px', height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            textAlign: msg.role === 'user' ? 'right' : 'left',
            margin: '0.5rem 0'
          }}>
            <div style={{
              display: 'inline-block',
              background: msg.role === 'user' ? '#dcf8c6' : '#ffffff',
              padding: '0.5rem 1rem',
              borderRadius: '10px'
            }}>
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something about your plant..."
          style={{ flexGrow: 1, padding: '0.5rem', borderRadius: '4px', marginRight: '0.5rem' }}
        />
        <button onClick={sendMessage} style={{ padding: '0.5rem 1rem', background: 'green', color: 'white', borderRadius: '4px' }}>
          Send
        </button>
      </div>
    </div>
  );
}