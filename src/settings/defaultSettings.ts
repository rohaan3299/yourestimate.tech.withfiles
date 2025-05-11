export const defaultSettings = {
  siteName: 'EstiMate',
  logo: 'building',
  logoUrl: '',
  brandColor: '#2563eb',
  primaryColor: '#2563eb',
  secondaryColor: '#1e40af',
  accentColor: '#60a5fa',
  backgroundColor: '#f8fafc',
  textColor: '#1e293b',
  reportHeader: 'Construction Cost Estimation Report',
  reportFooter: 'Thank you for using our service',
  pricePerSqFt: 3500, // Updated base price
  laborCostPerDay: 1500, // Updated labor cost
  brickPrice: 25, // Average price per brick
  cementPrice: 1650, // Average price per 50kg bag
  steelPrice: 275000, // Average price per ton
  plumbingCostPerSqFt: 200,
  electricalCostPerSqFt: 200,
  mortarRatio: '1:4',
  sandPrice: 55000, // Average price per truckload
  resources: [],
  adminCredentials: {
    username: 'admin12',
    password: 'admin12'
  },
  assumptions: {
    bricksPerSqFt: 3,
    cementBagsPerSqFt: 0.3,
    steelPerSqFt: 0.07,
    laborProductivityPerDay: 100,
    mortarPerBrick: 0.001,
    sandPerBag: 4.5,
    builtUpAreaFactor: 0.75,
    largePlotFactor: 0.5,
    materialCostFactor: 0.55, // Updated to 55% of total cost
    laborCostFactor: 0.25, // Updated to 25% of total cost
    foundationCostPerSqFt: 400,
    flooringCostPerSqFt: 150, // Updated flooring cost
    paintingCostPerSqFt: 15,
    plasteringCostPerSqFt: 30,
    windowCost: 10000,
    doorCost: 12000,
    kitchenBaseCost: 50000,
    waterTankCost: 25000,
    parkingCost: 150000,
    fullEscapePremium: 0.15, // Updated premium for full escape
    basementCost: 800000,
    garageCost: 150000,
    timelineBaseCost: 50000,
    timelineFactorPerMonth: 0.02,
    locationFactors: {
      urban: 1.25, // Updated for urban areas
      suburban: 1.0,
      rural: 0.8
    },
    qualityFactors: {
      standard: 1.0,
      premium: 1.3,
      luxury: 1.6
    }
  }
};