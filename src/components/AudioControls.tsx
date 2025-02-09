import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { audioService } from '../services/audio';

export function AudioControls() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (isPlaying) {
      audioService.pause();
    } else {
      audioService.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    audioService.setVolume(newMuted ? 0 : volume);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioService.setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-center gap-6">
      <button
        onClick={togglePlay}
        className="bg-blue-900 hover:bg-blue-800 transition-colors p-3 rounded-full"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleMute}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6" />
          ) : (
            <Volume2 className="w-6 h-6" />
          )}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="w-24 sm:w-32 h-2 bg-blue-900 rounded-lg appearance-none cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(to right, #1d4ed8 ${volume * 100}%, #1e3a8a ${volume * 100}%)`
          }}
        />
      </div>
    </div>
  );
}
