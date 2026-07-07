import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Sidebar, 
  Lock, 
  RotateCw, 
  Share, 
  Plus, 
  Copy 
} from 'lucide-react';
import { TypingAnimation } from '../ui/typing-animation';

interface SafariFrameProps {
  className?: string;
  children?: React.ReactNode;
  compact?: boolean; // Added a flag if you want to explicitly force ultra-minimal mode
}

export default function SafariFrame({ 
  className = "",
  children,
  compact = false,
}: SafariFrameProps) {
  return (
    <div 
      className={`flex flex-col border border-white/10 rounded-xl overflow-hidden bg-[#1C1C1E] shadow-2xl transition-all ${className}`}
    >
      {/* Safari Title Bar */}
      <div className="flex items-center gap-3 px-3 py-2 bg-[#2C2C2E] border-b border-white/5 select-none justify-between">
        
        {/* Left Actions: Shrinks dynamically, hides complex tools if compact */}
        <div className="flex items-center gap-3 min-w-0 flex-shrink-1">
          {/* Traffic Lights always visible */}
          <div className="flex gap-1.5 flex-shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-black/5" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-black/5" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-black/5" />
          </div>
          
          {/* Standard window controls disappear when squished */}
          {!compact && (
            <div className="hidden lg:flex items-center gap-1.5 text-neutral-400 flex-shrink-0">
              <Sidebar className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
              <ChevronLeft className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
              <ChevronRight className="w-3.5 h-3.5 opacity-30" />
            </div>
          )}
        </div>

        {/* Center: Address Bar (Now completely fluid with priority sizing) */}
        <div className="flex-1 min-w-0 max-w-xl mx-2 flex items-center gap-1.5 px-2.5 py-1 bg-[#1C1C1E] border border-white/5 rounded-md text-xs text-neutral-200 transition-all hover:bg-[#252527]">
          <Lock className="w-3 h-3 text-neutral-400 flex-shrink-0" />
          <span className="w-truncate tracking-wide font-medium flex-1 min-w-0 text-left text-[11px] sm:text-xs">
            gitxhibit.com/ <TypingAnimation className="p-0 m-0 leading-relaxed text-green-400" words={["k4rtikay", "torvalds", "t3dotgg"]} loop/>
          </span>
          <RotateCw className="w-3 h-3 text-neutral-400 flex-shrink-0 cursor-pointer hover:text-white transition-colors" />
        </div>

        {/* Right Actions: Scales down to just a copy button when space is small */}
        <div className="flex items-center gap-3 text-neutral-400 flex-shrink-0 justify-end">
          {!compact && (
            <div className="hidden lg:flex items-center gap-3">
              <Share className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
              <Plus className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer" />
            </div>
          )}
          <Copy className="w-3.5 h-3.5 hover:text-white transition-colors cursor-pointer flex-shrink-0" />
        </div>
      </div>

      {/* Safari Content Area */}
      <div className="flex-1 bg-[#151515] relative w-full h-full min-h-0">
        {children}
      </div>
    </div>
  );
}