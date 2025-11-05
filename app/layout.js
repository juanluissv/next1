import "./globals.css";

export const metadata = {
  title: "Property Pulse",
  description: "Rental, Buy or Sell Your Property with Ease",
  keywords: "Rental, Property, Buy, Sell, Real Estate, Homes, Apartments, Houses",

};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}


