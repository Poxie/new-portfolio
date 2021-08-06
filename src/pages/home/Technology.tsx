import { Flex } from "../../components/Flex"

interface Props {
    language: string;
    description: string;
    icon: string;
    addons: string[];
    index: number;
    amount: number;
    isMain?: boolean;
}

export const Technology: React.FC<Props> = ({ language, icon, addons, description, index, amount, isMain }) => {
    const animationDelay = parseInt((index - Math.floor(amount / 2)).toString().replaceAll('-', '')) / 2;
    // Sorting based on letter amount
    addons = addons.sort((a, b) => a.length - b.length);

    return (
        <Flex className={`technology${isMain ? ' is-main' : ''}`} style={{animationDelay: `${animationDelay}s`}} flexDirection={'column'}>
            <span className="language-name">
                {language}
            </span>
            <div className="technology-spine">
                <span className="technology-description">
                    {description}
                </span>
                <div className="addons">
                    {addons.map((addon, key) => {
                        return(
                            <div className="addon" key={key}>
                                {addon}
                            </div>
                        )
                    })}
                </div>
                <img src={icon} alt="" />
            </div>
        </Flex>
    )
}