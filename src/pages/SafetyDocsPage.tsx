import React from 'react';
import { FileText, Download } from 'lucide-react';

interface SafetyDocument {
  title: string;
  filename: string;
}

const documents: SafetyDocument[] = [
  { title: 'Construction Safety Checklist', filename: 'construction-safety.pdf' },
  { title: 'Hazard Analysis Report', filename: 'hazard-analysis.pdf' },
  { title: 'Hazard Symbol Guide', filename: 'hazard-symbols.pdf' },
  { title: 'Road Signs Guide', filename: 'road-signs.pdf' },
  { title: 'Excavation Safety Checklist', filename: 'excavation-safety.pdf' },
  { title: 'General Toolbox Meeting Checklist', filename: 'toolbox-meeting.pdf' },
  { title: 'Hot Work Permit Checklist', filename: 'hot-work-permit.pdf' },
  { title: 'Safety Walk Checklist', filename: 'safety-walk.pdf' },
  { title: 'Scaffolding Inspection Checklist', filename: 'scaffolding-inspection.pdf' },
  { title: 'Weekly Site Safety Inspection Checklist', filename: 'weekly-site-safety.pdf' }
];

export default function SafetyDocsPage() {
  const handleView = (filename: string) => {
    window.open(`/safety-docs/${filename}`, '_blank');
  };

  const handleDownload = (filename: string) => {
    const link = document.createElement('a');
    link.href = `/safety-docs/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Safety Documents</h1>
        <p className="text-xl text-gray-600">
          Essential safety checklists and guidelines for construction projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc) => (
          <div
            key={doc.filename}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">{doc.title}</h3>
                </div>
              </div>
              <div className="mt-6 flex space-x-4">
                <button
                  onClick={() => handleView(doc.filename)}
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>View</span>
                </button>
                <button
                  onClick={() => handleDownload(doc.filename)}
                  className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}