import React, { useState } from 'react';
import { TopMenu } from './components/TopMenu';
import { ChatWindow } from './components/ChatWindow';
import { BottomMenu } from './components/BottomMenu';
import { Sidebar } from './components/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-blue-900/50">
        <TopMenu isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      </header>

      <main className="pt-[73px] pb-[76px] min-h-screen">
        <div className="container max-w-4xl mx-auto px-4 h-[calc(100vh-149px)]">
          <div className="h-full">
            <ChatWindow />
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-t border-blue-900/50">
        <BottomMenu />
      </footer>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}

export default App;
