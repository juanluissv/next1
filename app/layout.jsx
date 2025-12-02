import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import AuthProvider from "@/components/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Property Pulse",
  description: "Rental, Buy or Sell Your Property with Ease",
  keywords: "Rental, Property, Buy, Sell, Real Estate, Homes, Apartments, Houses",

};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
}


