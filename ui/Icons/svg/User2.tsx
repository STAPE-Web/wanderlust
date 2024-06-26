import { CustomSvgProps } from "@/types"
import Svg, { Path } from "react-native-svg"

const User2: React.FC<CustomSvgProps> = ({ color = "#000", ...props }) => {
    return (
        <Svg
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default User2