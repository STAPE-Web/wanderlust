import { CustomSvgProps } from "@/types"
import Svg, { Path } from "react-native-svg"

const Globe: React.FC<CustomSvgProps> = ({ color = "#000", ...props }) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 34 34"
            {...props}
        >
            <Path
                d="M17 32.2c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15z"
                stroke={color}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M2.75 17.95l8.25 3-1.5 5.25 1.5 4.5M24.5 29.95l-.75-3.75L20 24.7v-5.25l4.5-1.5 6.75.75M27.5 7.45l-.75 2.25-5.25.75v4.5l3.75-1.5h3l3 1.5M2.75 14.95l3.75-3 3.75-.75 3-4.5-1.5-3"
                stroke={color}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Globe