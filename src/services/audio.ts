export class AudioService {
  private audio: HTMLAudioElement | null = null;
  private readonly audioUrl = 'https://a87b81cac564e8d39ae093cf479774ff.r2.cloudflarestorage.com/foamradio/Airtight%20Rhythm.mp3';

  constructor() {
    this.initAudio();
  }

  private initAudio() {
    this.audio = new Audio(this.audioUrl);
    this.audio.loop = true;
  }

  play() {
    this.audio?.play().catch(error => {
      console.error('Error playing audio:', error);
    });
  }

  pause() {
    this.audio?.pause();
  }

  setVolume(volume: number) {
    if (this.audio) {
      this.audio.volume = Math.max(0, Math.min(1, volume));
    }
  }
}

export const audioService = new AudioService();
