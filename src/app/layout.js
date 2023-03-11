import { Raleway } from "next/font/google";
import "@styles/globals.css";

export const metadata = {
  title: "Nish Template",
};

const raleway = Raleway({
  weights: [200, 300, 400, 500, 600, 700, 800],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable}`}>
      <body>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
