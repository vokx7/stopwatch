import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export const Container = ({children}: Props) => {
    return <div className="prose-xl flex flex-col justify-center h-screen w-full px-8 text-center">
        {children}
    </div>
}