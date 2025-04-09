import type { NextConfig } from "next";
import withNextIntl from "next-intl/plugin";

const nextConfig: NextConfig = withNextIntl()({
  reactStrictMode: true,
  swcMinify: true,
  env: {
    // Expose ta clé Resend uniquement pour le backend (sera disponible côté serveur)
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  images: {
    // Exemple de configuration pour autoriser des images depuis un domaine externe
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
      },
    ],
  },
  // Tu peux ajouter d'autres options ici, par exemple :
  // experimental: {
  //   appDir: true,
  // },
});

export default nextConfig;
