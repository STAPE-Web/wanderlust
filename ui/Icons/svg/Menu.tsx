import { CustomSvgProps } from "@/types"
import Svg, { Path } from "react-native-svg"

const Menu: React.FC<CustomSvgProps> = ({ color = "#000", ...props }) => {
    return (
        <Svg
            viewBox="0 0 30 30"
            fill="none"
            {...props}
        >
            <Path
                d="M3.75 15h22.5M3.75 7.5h22.5M3.75 22.5h22.5"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Menu