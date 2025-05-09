import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
export interface DoctorForm {
    name: string;
    specialty: string;
    location: string;
    rating: string;
}
