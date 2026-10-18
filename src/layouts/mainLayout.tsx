import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100svh-8rem)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
