import React, { useState } from 'react';
import { TopMenu } from './components/TopMenu';
import { ChatWindow } from './components/ChatWindow';
import { BottomMenu } from './components/BottomMenu';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="h-screen flex flex-col">
        <div className="p-4 bg-gray-950/90 backdrop-blur-sm border-b border-blue-900/50">
          <TopMenu isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>
        
        <div className="flex-1 overflow-hidden p-4">
          <ChatWindow />
        </div>

        <BottomMenu />
      </div>
    </div>
  );
}

export default App;
