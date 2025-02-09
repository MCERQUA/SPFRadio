import React from 'react';

export function Resources() {
  return (
    <div className="bg-gray-950/50 rounded-lg backdrop-blur-sm border border-blue-900/50 shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
        Resources
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-900/30">
          <h2 className="text-xl font-semibold mb-3 text-blue-300">Documentation</h2>
          <p className="text-gray-400">Documentation coming soon</p>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-900/30">
          <h2 className="text-xl font-semibold mb-3 text-blue-300">Tutorials</h2>
          <p className="text-gray-400">Tutorials coming soon</p>
        </div>
      </div>
    </div>
  );
}
