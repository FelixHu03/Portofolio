import Navbar from "./navbar";
import './globals.css';
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>

    </html>
  )
}