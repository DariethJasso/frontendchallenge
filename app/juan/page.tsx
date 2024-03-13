export default function Juan(){
    return (
        <section className="flex flex-col p-6 h-screen justify-between" id="about">
            <div className="flex justify-between">
                <div className="flex flex-col w-[50%] gap-4">
                    
                    <h2 className="text-[30px] font-bold text-center"><span className="text-blue-500">Acerca de </span>la Secretaría Para la Honestidad y Buena Gobernanza</h2>
            
                
                    <div className="text-[18px] text-justify xl:text-[26px]">Es la Dependencia del Gobierno del Estado de Nayarit que vigila el cumplimiento de la normatividad vigente en el Estado de Nayarit. Así como los planes y programas implementados por las Dependencias y Entidades que integran la Administración Pública Estatal.</div>
                    <div className="flex flex-col gap-4">
                    <span className="font-bold text-center text-2xl">Valores</span>
                    <span className="text-[17px] text-justify xl:text-[24px]">Equidad de Género, Honradez, Bien Común, Integridad, Respeto, Compromiso, Confianza, Guardar la Confidencialidad, Imparcialidad, Transparencia, Responsabilidad, Desarrollo, Igualdad, Eficiencia, Justicia, Dignidad, Legalidad, Obligatoriedad, Lealtad, Generosidad, Liderazgo, Honestidad, No Discriminación, Rectitud, Solidaridad y Tolerancia.</span>
                    </div>
                </div>

                <div className="w-[50%] flex justify-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTzuQHClqzSugrasK7s69KIMUuqALRXEKWTCCB2fYtYgSp_8PSHoW_mlHYOI9IaS1fVII&usqp=CAU" className="" alt="" />
                </div>
            </div>
            <div className="flex gap-6">
                <div className="flex flex-col gap-4">
                <img src="https://www.integralshipping.com/wp-content/uploads/2017/11/Mision-Integral-Shipping-company-02.jpg" alt="" className="w-[80px] xl:w-[120px]" />
                    <span className="font-bold text-2xl">Misión</span>
                        <span className="text-justify xl:text-[20px]">Supervisar, fiscalizar y auditar el actuar de la administración pública Estatal, anteponiendo la honestidad, legalidad y transparencia, el control preventivo y la participación ciudadana; además de vigilar el ejercicio de las responsabilidades de los servidores públicos.</span>
                </div>
                <div className="flex flex-col gap-4">
                <img src="https://www.integralshipping.com/wp-content/uploads/2017/11/Mision-Integral-Shipping-company-02.jpg" alt="" className="w-[80px] xl:w-[120px]" />
                <span className="font-bold text-2xl ">Visión</span>
                    <span className="text-justify xl:text-[20px]">Ser la Secretaría que cuente con la confianza de la ciudadanía promoviendo la participación social, la transparencia y la rendición de cuentas; contribuyendo a la conformación de un gobierno honesto y transparente.</span>
                </div>
                <div className="flex flex-col gap-4">
                <img src="https://www.integralshipping.com/wp-content/uploads/2017/11/Mision-Integral-Shipping-company-02.jpg" alt="" className="w-[80px] xl:w-[120px]" />
                    <span className="font-bold text-2xl">Objetivo</span>
                        <span className="text-justify xl:text-[20px]">Fomentar en la administración pública Estatal, la cultura de la legalidad, la transparencia de los recursos públicos y la rendición de cuentas de los servidores públicos a través del combate a la corrupción.</span>
                </div>
            </div>
            
        </section>
    )
}