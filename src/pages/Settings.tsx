import React from 'react';

export function Settings() {
  return (
    <div className="bg-gray-950/50 rounded-lg backdrop-blur-sm border border-blue-900/50 shadow-xl p-6">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
        Settings
      </h1>
      <div className="space-y-6">
        <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-900/30">
          <h2 className="text-xl font-semibold mb-3 text-blue-300">General Settings</h2>
          <p className="text-gray-400">No settings available</p>
        </div>
        <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-900/30">
          <h2 className="text-xl font-semibold mb-3 text-blue-300">Account Settings</h2>
          <p className="text-gray-400">No account settings available</p>
        </div>
      </div>
    </div>
  );
}
