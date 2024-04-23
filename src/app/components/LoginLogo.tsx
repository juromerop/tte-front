import React from 'react';
import Image from 'next/image';

const LoginLogo: React.FC = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/tte-bg-login.svg"
        alt="Background"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/tte-logo.svg"
          alt="Logo"
          width={410} 
          height={410} 
        />
      </div>
    </div>
  );
};

export default LoginLogo;