import { Outlet } from "react-router-dom";
import Header from "../components/Header";
export default function MainLayout() {
  return (
    <>
      <header className="font-rancho">
        <Header />
      </header>
      <main className="font-rancho">
        <Outlet/>
      </main>
      <footer>

      </footer>
    </>
  );
}
