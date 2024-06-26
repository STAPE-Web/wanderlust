import { CustomSvgProps } from "@/types"
import Svg, { Path } from "react-native-svg"

const Calendar: React.FC<CustomSvgProps> = ({ color = "#000", ...props }) => {
    return (
        <Svg
            viewBox="0 0 24 26"
            fill="none"
            {...props}
        >
            <Path
                d="M7.556 2v3.3M16.444 2v3.3M2.556 9.8h18.888M22 9.15v9.35c0 3.3-1.667 5.5-5.556 5.5H7.556C3.666 24 2 21.8 2 18.5V9.15c0-3.3 1.667-5.5 5.556-5.5h8.888c3.89 0 5.556 2.2 5.556 5.5z"
                stroke={color}
                strokeWidth={2.45445}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16.105 14.87h.01M16.105 18.17h.01M11.995 14.87h.01M11.995 18.17h.01M7.883 14.87h.01M7.883 18.17h.01"
                stroke={color}
                strokeWidth={3.2726}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Calendar