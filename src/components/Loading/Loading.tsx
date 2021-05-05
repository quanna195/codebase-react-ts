import React from 'react';

type TLoadingProps = unknown;

const Loading: React.FC<TLoadingProps> = () => {
  const text = 'Loading...';
  return (
    <div>
      <span>{text}</span>
    </div>
  );
};

export default Loading;
