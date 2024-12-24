import Navbar from "./navbar";
import './globals.css';
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-blue-500 to-green-500 min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>

    </html>
  )
}