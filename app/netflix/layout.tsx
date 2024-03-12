import Footer from "../ui/netflix/Footer";
import NavBar from "../ui/netflix/NavBar";

export default function NetflixLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-[50px]">
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}