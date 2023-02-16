import Footer from "./Footer";
import Navbar from "./Navbar";
import Contact from "./contact"
import Socials from "@/components/Socials";

function Layout({children}) {
    return (  
        <main className="bg-slate-50">
            <Navbar />
            <Socials />
            {children}
            <Contact />
            <Footer />
        </main>
    );
}

export default Layout;