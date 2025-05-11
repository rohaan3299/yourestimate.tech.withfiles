import React, { useState } from 'react';
import { Container } from 'lucide-react';

type TankShape = 'rectangular' | 'cylindrical';

const WATER_PER_PERSON_PER_DAY = 150; // Liters per person per day (standard consumption)

export default function WaterTankCalculator() {
  const [shape, setShape] = useState<TankShape>('rectangular');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [diameter, setDiameter] = useState('');
  const [result, setResult] = useState<{
    volume: number;
    peopleSupported: number;
    daysSupported: {
      onePerson: number;
      family: number;
      apartment: number;
    };
  } | null>(null);

  const calculateVolume = () => {
    let volume = 0;
    
    if (shape === 'rectangular') {
      const l = parseFloat(length);
      const w = parseFloat(width);
      const h = parseFloat(height);
      if (l && w && h) {
        volume = l * w * h * 28.317; // Convert cubic feet to liters
      }
    } else {
      const d = parseFloat(diameter);
      const h = parseFloat(height);
      if (d && h) {
        const radius = d / 2;
        volume = Math.PI * radius * radius * h * 28.317; // Convert cubic feet to liters
      }
    }

    if (volume > 0) {
      const peopleSupported = Math.floor(volume / WATER_PER_PERSON_PER_DAY);
      setResult({
        volume,
        peopleSupported,
        daysSupported: {
          onePerson: Math.floor(volume / WATER_PER_PERSON_PER_DAY),
          family: Math.floor(volume / (WATER_PER_PERSON_PER_DAY * 4)), // Assuming family of 4
          apartment: Math.floor(volume / (WATER_PER_PERSON_PER_DAY * 10)) // Assuming 10 people
        }
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Container className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Water Tank Calculator</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tank Shape
            </label>
            <select
              value={shape}
              onChange={(e) => setShape(e.target.value as TankShape)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="rectangular">Rectangular</option>
              <option value="cylindrical">Cylindrical</option>
            </select>
          </div>

          {shape === 'rectangular' ? (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Length (ft)
                </label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter length"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Width (ft)
                </label>
                <input
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter width"
                />
              </div>
            </>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Diameter (ft)
              </label>
              <input
                type="number"
                value={diameter}
                onChange={(e) => setDiameter(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter diameter"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Height (ft)
            </label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter height"
            />
          </div>

          <button
            onClick={calculateVolume}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg space-y-4">
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Tank Capacity:</h3>
                <p className="text-2xl font-bold text-gray-800">
                  {Math.ceil(result.volume).toLocaleString()} Liters
                </p>
              </div>

              <div className="border-t pt-4">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Water Supply Duration:</h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    • For one person: {result.daysSupported.onePerson} days
                  </p>
                  <p className="text-gray-700">
                    • For a family (4 people): {result.daysSupported.family} days
                  </p>
                  <p className="text-gray-700">
                    • For an apartment (10 people): {result.daysSupported.apartment} days
                  </p>
                </div>
              </div>

              <div className="text-sm text-gray-600 bg-blue-100 p-3 rounded-lg">
                <p>Note: Calculations based on average consumption of {WATER_PER_PERSON_PER_DAY} liters per person per day</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}