import { useEffect, useState } from "react"

interface Props {
    delay: number;
    children: any;
}

export const WaitFor: React.FC<Props> = ({ delay, children }) => {
    const [element, setElement] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setElement(children);
        }, delay)
    }, [delay]);

    return(
        <>
            {element}
        </>
    )
}