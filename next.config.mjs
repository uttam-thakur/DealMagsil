/** @type {import('next').NextConfig} */
const imageDomains = ["nebula.wsimg.com"];

const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: imageDomains?.map((domainName) => {
      return { protocol: "http", hostname: domainName, pathname: "/**" };
    }),
  },
};

export default nextConfig;
