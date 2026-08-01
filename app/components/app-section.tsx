import {Container} from "@/app/components/ui";
import {ReactNode} from "react";
import {Eyebrow} from "@/app/components/sections";

export function AppSection({header, headerShortDescription, id, bgColor, className, children}: {
    header: string,
    headerShortDescription?: string,
    bgColor?: string,
    id: string,
    className?: string,
    children: ReactNode
}) {
    return (
        <section id={id} className={`w-full py-12 my-1 shadow-md ${bgColor || 'bg-white'} ${className || ''}`}>
            <Container>
                <div className="flex flex-col items-center mb-10 gap-3 text-center">
                    <Eyebrow>{header}</Eyebrow>
                    <h2 className="text-[34px] font-bold text-primary">
                        {headerShortDescription}
                    </h2>
                </div>
                {children}

            </Container>
        </section>
   );
}
