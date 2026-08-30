// ==========================================
// Nexa React 👑 - Clone by DanzModss
// Full Source Code - React + Vite + Tailwind
// ==========================================

// File: src/App.jsx
import React, { useState } from 'react';
import { Coins, Server, User, Crown, Eye, ShieldCheck, Sparkles } from 'lucide-react';

const App = () => {
  const [emojiList, setEmojiList] = useState([]);
  const [inputEmoji, setInputEmoji] = useState('');

  const handleAddEmoji = (e) => {
    e.preventDefault();
    if (inputEmoji.trim() && emojiList.length < 4) {
      setEmojiList([...emojiList, inputEmoji.trim()]);
      setInputEmoji('');
    }
  };

  const handleRemoveEmoji = (index) => {
    setEmojiList(emojiList.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white font-sans antialiased">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#12121a] px-4 py-3 flex items-center justify-between sticky top-0 z-10 backdrop-blur-xl bg-[#12121a]/80">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold text-sm">
            N
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Nexa React
          </span>
          <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full border border-yellow-500/30">
            👑
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 hidden sm:block">Server2</span>
          <div className="flex items-center gap-1 text-xs bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <Server size={14} className="text-gray-400" />
            <span className="text-gray-300">Online</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-6">
        {/* Card Membership */}
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-6 border border-white/5 shadow-2xl shadow-purple-500/5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Crown size={18} className="text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">Membership</span>
            </div>
            <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30 flex items-center gap-1">
              <ShieldCheck size={14} />
              FREE USER
            </span>
          </div>

          <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
              U
            </div>
            <div>
              <p className="text-sm text-gray-400">Verified ID</p>
              <p className="font-mono text-sm tracking-wider text-white">NEXA-C04E83AD</p>
            </div>
          </div>

          {/* Saldo */}
          <div className="mt-4 flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/5">
            <div className="flex items-center gap-2">
              <Coins size={20} className="text-yellow-400" />
              <span className="text-sm text-gray-300">Saldo Tersedia</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-yellow-400">3</span>
              <span className="text-sm text-yellow-400/70">Coins</span>
            </div>
          </div>
        </div>

        {/* Preview Emoji */}
        <div className="mt-6 bg-[#12121a] rounded-2xl p-6 border border-white/5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Eye size={18} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-300">Preview</span>
            </div>
            <span className="text-xs text-gray-500">Ketik emoji di atas...</span>
          </div>

          {/* Emoji Grid */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            {[...Array(4)].map((_, idx) => (
              <div 
                key={idx}
                className="aspect-square bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-4xl transition-all hover:border-purple-500/50 hover:bg-white/10"
              >
                {emojiList[idx] || (
                  <span className="text-gray-600 text-sm">+</span>
                )}
              </div>
            ))}
          </div>

          {/* Input Emoji */}
          <form onSubmit={handleAddEmoji} className="flex gap-2">
            <input
              type="text"
              value={inputEmoji}
              onChange={(e) => setInputEmoji(e.target.value)}
              placeholder="Ketik emoji (contoh: 😈)"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
              maxLength={2}
            />
            <button
              type="submit"
              disabled={emojiList.length >= 4}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2"
            >
              <Sparkles size={16} />
              Tambah
            </button>
          </form>

          {/* Emoji List */}
          {emojiList.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {emojiList.map((emoji, idx) => (
                <span 
                  key={idx}
                  className="bg-white/10 px-3 py-1.5 rounded-lg text-xl flex items-center gap-2 border border-white/10"
                >
                  {emoji}
                  <button 
                    onClick={() => handleRemoveEmoji(idx)}
                    className="text-xs text-gray-500 hover:text-red-400 transition-colors"
                  >
                    ✕
        </button>
              </span>
            ))}
          </div>
          )}
        </div>

        {/* Footer Aman & Terlindungi */}
        <div className="mt-6 text-center text-xs text-gray-500 border-t border-white/5 pt-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <ShieldCheck size={16} className="text-green-400" />
            <span>Aman & Terlindungi</span>
          </div>
          <p>© 2026 Dlouis React Smm — Clone by TUAN ZEN</p>
        </div>
      </main>
    </div>
  );
};

export default App;
