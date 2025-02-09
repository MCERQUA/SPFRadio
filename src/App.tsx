import React, { useState, useEffect } from 'react';
import { TopMenu } from './components/TopMenu';
import { ChatWindow } from './components/ChatWindow';
import { AudioControls } from './components/AudioControls';
import { Sidebar } from './components/Sidebar';
import { audioService } from './services/audio';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    audioService.play();
    return () => {
      audioService.pause();
    };
  }, []);

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
          <div className="flex flex-col h-full">
            <div className="w-full flex justify-center mb-4">
              <img 
                src="/SPFDJ.jpg" 
                alt="SPFDJ" 
                className="w-full max-w-2xl h-48 object-cover rounded-lg border border-blue-900/50"
              />
            </div>
            <div className="flex-1">
              <ChatWindow />
            </div>
          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-sm border-t border-blue-900/50">
        <AudioControls />
      </footer>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}

export default App;
