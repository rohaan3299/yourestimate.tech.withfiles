import React, { useState } from 'react';
import { PaintBucket } from 'lucide-react';

const PAINT_COVERAGE_PER_LITER = 100; // Square feet per liter (standard coverage)

export default function PaintCalculator() {
  const [wallArea, setWallArea] = useState('');
  const [coats, setCoats] = useState('1');
  const [costPerLiter, setCostPerLiter] = useState('');
  const [result, setResult] = useState<{ liters: number; cost: number } | null>(null);

  const calculatePaint = () => {
    const area = parseFloat(wallArea);
    const numCoats = parseInt(coats);
    const cost = parseFloat(costPerLiter);

    if (area && cost) {
      const totalArea = area * numCoats;
      const litersNeeded = totalArea / PAINT_COVERAGE_PER_LITER;
      const totalCost = litersNeeded * cost;
      
      setResult({
        liters: Math.ceil(litersNeeded),
        cost: Math.ceil(totalCost)
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center space-x-3 mb-6">
          <PaintBucket className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Paint Calculator</h2>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Total Wall Area (sq. ft)
            </label>
            <input
              type="number"
              value={wallArea}
              onChange={(e) => setWallArea(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter total wall area"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Number of Coats
            </label>
            <select
              value={coats}
              onChange={(e) => setCoats(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="1">1 Coat</option>
              <option value="2">2 Coats</option>
              <option value="3">3 Coats</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Paint Cost per Liter (PKR)
            </label>
            <input
              type="number"
              value={costPerLiter}
              onChange={(e) => setCostPerLiter(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter cost per liter"
            />
          </div>

          <button
            onClick={calculatePaint}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Calculate
          </button>

          {result && (
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Results:</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Paint Required:</p>
                  <p className="text-lg font-semibold text-gray-800">{result.liters} Liters</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Cost:</p>
                  <p className="text-lg font-semibold text-gray-800">PKR {result.cost}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Based on standard coverage of {PAINT_COVERAGE_PER_LITER} sq. ft per liter
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}