import Drawer from "../ui/twitter/Drawer";


export default function NetflixLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-[50px]">
            <Drawer/>
            {children}
        </div>
    )
}