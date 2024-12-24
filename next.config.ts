import type { NextConfig } from "next";
import { i18n } from './next-i18next.config';
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,  // Optional: depending on your project needs
  i18n, 
};

export default nextConfig;
