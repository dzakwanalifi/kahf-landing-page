/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hapus atau komentari baris berikut
  // output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
  optimizeCss: true, // Tambahkan ini
  experimental: {
    css: true,
  },
}

module.exports = nextConfig
