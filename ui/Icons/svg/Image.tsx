import { CustomSvgProps } from "@/types"
import Svg, { Path } from "react-native-svg"

const Image: React.FC<CustomSvgProps> = ({ color = "#000", ...props }) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 24 24"
            stroke={color}
            strokeWidth={2}
            {...props}
        >
            <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
        </Svg>
    )
}

export default Image