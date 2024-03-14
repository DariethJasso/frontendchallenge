'use client'
import { useData } from "@/app/hook/useData";
import Biography from "@/app/ui/twitter/profile/biography";
import HeadName from "@/app/ui/twitter/profile/headname";

export default function Profile({ params }: { params: { id: string } }) {
    const id = params.id
    const { users } = useData();
    const user = users.find(user => user.id === parseInt(id))
    
    if (!user) {
        return <div>Usuario no encontrado</div>;
    }
    
    return (
        <section className="bg-black sm:h-auto sm:flex sm:flex-col sm:pl-[120px] lg:pl-[300px] lg:w-[150%] xl1:pl-[460px] xl1:w-screen">
            <HeadName name={user.name} />
            <Biography user={user} />
        </section>
    );
}
