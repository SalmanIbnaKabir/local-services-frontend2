"use client";
import Footer from "@/components/UI/Footer";
import Navbar from "@/components/UI/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
