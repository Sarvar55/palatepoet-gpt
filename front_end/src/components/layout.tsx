import Sidebar from "@/components/sidebar";
import TopBar from "./top-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row justify-start relative">
      <Sidebar />
      <div className="bg-primary flex-1 p-4 text-white">
        <TopBar />
        {children}
      </div>
    </div>
  );
}
