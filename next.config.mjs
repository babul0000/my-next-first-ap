/** @type {import('next').NextConfig} */
const nextConfig = {

  // https://unsplash.com/photos/lemon-water-in-footed-glass-RgplfXbxLFs

 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },

  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
