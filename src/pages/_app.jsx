import Navbar from "@/components/static/navigation";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <span className="block absolute -translate-y-1/2 inset-0 bg-gradient-to-bl from-amber-400/20 blur-2xl"></span>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
