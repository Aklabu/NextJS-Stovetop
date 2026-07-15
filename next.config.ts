import type { NextConfig } from "next";

// Extract just the hostname from the API base URL so Next.js can allow
// remote images served from that domain (e.g. /media/... paths).
function apiHostname(): string {
  const raw = process.env.NEXT_PUBLIC_API_BASE_URL ?? ''
  try {
    return new URL(raw).hostname
  } catch {
    return ''
  }
}

const hostname = apiHostname()

const nextConfig: NextConfig = {
  images: {
    remotePatterns: hostname
      ? [
          {
            protocol: "https",
            hostname,
            pathname: "/media/**",
          },
        ]
      : [],
  },
};

export default nextConfig;
