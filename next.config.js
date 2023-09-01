/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
    APPWRITE_DATABASE_ID: process.env.APPWRITE_DATABASE_ID,
    APPWRITE_COLLECTION_ID: process.env.APPWRITE_COLLECTION_ID
  },
}

module.exports = nextConfig
