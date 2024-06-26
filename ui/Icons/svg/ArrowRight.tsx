import { CustomSvgProps } from "@/types"
import Svg, { Path } from "react-native-svg"

const ArrowRight: React.FC<CustomSvgProps> = ({ color = "#000", ...props }) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 24 24"
            stroke={color}
            strokeWidth={2}
            {...props}
        >
            <Path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </Svg>
    )
}

export default ArrowRight