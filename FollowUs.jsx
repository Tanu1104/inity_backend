import React from 'react';

const FollowUs = () => {
  return (
    <div className="py-24 px-6 lg:px-20 text-center">
      <h1 className="text-4xl font-black italic mb-4">Follow Us</h1>
      <p className="text-lg text-zinc-400 mb-8">
        Stay updated with our latest news and products on our social media channels.
      </p>
      <div className="flex justify-center gap-8">
        <a href="#" className="text-cyan-400 hover:text-white">Facebook</a>
        <a href="#" className="text-cyan-400 hover:text-white">Twitter</a>
        <a href="#" className="text-cyan-400 hover:text-white">Instagram</a>
      </div>
    </div>
  );
};

export default FollowUs;
