import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, Square, FastForward, Sparkles } from 'lucide-react';

export default function AudioBriefingPlayer({ title, textToRead }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [progress, setProgress] = useState(0);
  const utteranceRef = useRef(null);

  const cleanText = (raw) => {
    if (!raw) return '';
    return raw
      .replace(/###/g, '')
      .replace(/##/g, '')
      .replace(/#/g, '')
      .replace(/\*/g, '')
      .replace(/\[/g, '')
      .replace(/\]/g, '')
      .replace(/\((http|https):\/\/[^\)]+\)/g, '')
      .trim();
  };

  const handlePlay = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('사용하시는 브라우저가 음성 재생(TTS)을 지원하지 않습니다.');
      return;
    }

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      setIsPaused(false);
      return;
    }

    window.speechSynthesis.cancel(); // Reset previous speech

    const text = `${title}. ${cleanText(textToRead)}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = playbackSpeed;

    // Try to find a natural Korean voice
    const voices = window.speechSynthesis.getVoices();
    const koVoice = voices.find(v => v.lang.includes('ko') || v.lang.includes('KO'));
    if (koVoice) {
      utterance.voice = koVoice;
    }

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(100);
    };

    utterance.onerror = (err) => {
      console.warn('[Audio Player Error]', err);
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
      setIsPaused(true);
    }
  };

  const handleStop = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(0);
    }
  };

  const handleSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
    if (isPlaying) {
      handleStop();
      setTimeout(handlePlay, 100);
    }
  };

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border border-gold-500/30 rounded-2xl p-4 shadow-lg space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
            <Volume2 className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-gold-400 uppercase tracking-widest block leading-none">
              AI AUDIO BROADCAST
            </span>
            <span className="text-xs font-bold text-white block mt-0.5">
              ▶ 1분 AI 오디오 뉴스 듣기
            </span>
          </div>
        </div>

        {/* Visual Waveform Animation when playing */}
        {isPlaying && (
          <div className="flex items-center space-x-1">
            <span className="w-1 h-4 bg-gold-400 animate-bounce rounded-full" />
            <span className="w-1 h-6 bg-cyan-400 animate-bounce delay-100 rounded-full" />
            <span className="w-1 h-3 bg-emerald-400 animate-bounce delay-200 rounded-full" />
            <span className="w-1 h-5 bg-gold-400 animate-bounce delay-300 rounded-full" />
          </div>
        )}
      </div>

      {/* Audio Controls Bar */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <div className="flex items-center space-x-2">
          {!isPlaying ? (
            <button
              onClick={handlePlay}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-navy-950 text-xs font-black flex items-center space-x-1.5 shadow-md hover:scale-105 transition-all"
            >
              <Play className="w-4 h-4 fill-navy-950" />
              <span>{isPaused ? '이어듣기' : '뉴스 재생'}</span>
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="px-4 py-2 rounded-xl bg-navy-800 text-gold-400 border border-gold-500/40 text-xs font-bold flex items-center space-x-1.5 hover:bg-navy-700 transition-colors"
            >
              <Pause className="w-4 h-4 fill-gold-400" />
              <span>일시정지</span>
            </button>
          )}

          {(isPlaying || isPaused) && (
            <button
              onClick={handleStop}
              className="p-2 rounded-xl bg-navy-950 border border-navy-800 text-slate-400 hover:text-white"
              title="정지"
            >
              <Square className="w-3.5 h-3.5 fill-slate-400" />
            </button>
          )}
        </div>

        {/* Speed Selector Buttons */}
        <div className="flex items-center space-x-1 text-[10px]">
          {[1.0, 1.2, 1.5].map(spd => (
            <button
              key={spd}
              onClick={() => handleSpeedChange(spd)}
              className={`px-2 py-1 rounded-md font-bold transition-all ${
                playbackSpeed === spd 
                  ? 'bg-gold-500 text-navy-950' 
                  : 'bg-navy-950 text-slate-400 border border-navy-800 hover:text-white'
              }`}
            >
              {spd}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
