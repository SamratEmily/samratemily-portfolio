import React, { useState } from 'react';

interface ProfilePhotoProps {
  src: string;
  name: string;
}

const ProfilePhoto: React.FC<ProfilePhotoProps> = ({ src, name }) => {
  const [failed, setFailed] = useState(false);
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <div className="relative">
      {/* Outer glow ring */}
      <div className="absolute inset-0 w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse"></div>

      {/* Space circle container */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-2 backdrop-blur-sm border border-white/10">
        {/* Inner photo circle */}
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500/40 shadow-2xl shadow-blue-500/30">
          {failed ? (
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
              <span className="text-white text-4xl font-bold" aria-label={name}>{initials}</span>
            </div>
          ) : (
            <img
              src={src}
              alt={name}
              width={192}
              height={192}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              onError={() => setFailed(true)}
            />
          )}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-8 left-2 w-1 h-1 bg-indigo-400 rounded-full animate-bounce"></div>
    </div>
  );
};

export default ProfilePhoto;
