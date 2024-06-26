import { CustomSvgProps } from "@/types"
import Svg, { Path } from "react-native-svg"

const ArrowDown: React.FC<CustomSvgProps> = ({ color = "#000", ...props }) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 24 24"
            stroke={color}
            strokeWidth={2}
            {...props}
        >
            <Path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </Svg>
    )
}

export default ArrowDown