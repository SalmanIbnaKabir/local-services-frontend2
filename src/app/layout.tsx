import "./globals.css";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "./../components/SessionProvider";
import { ToastContainer } from "react-toastify";
import Providers from "@/lib/Providers";
import Navbar from "@/components/UI/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Local Service",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <Providers>
      <SessionProvider session={session}>
        <html lang="en" data-theme="light">
          <body className={inter.className}>
            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />

            {children}
          </body>
        </html>
      </SessionProvider>
    </Providers>
  );
}
