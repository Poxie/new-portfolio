import { Tooltip } from "../../components/Tooltip"

interface Props {
    children: any;
    link: string;
    tooltip: string;
}
export const HeaderLink: React.FC<Props> = ({ children, link, tooltip }) => {
    return(
        <Tooltip className="header-link" tooltip={tooltip}>
            <a href={link} target="_blank" rel="noreferrer">
                {children}
            </a>
        </Tooltip>
    )
}