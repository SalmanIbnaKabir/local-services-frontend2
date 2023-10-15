import Footer from "@/components/UI/Footer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
