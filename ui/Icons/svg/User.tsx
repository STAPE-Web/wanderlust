import { CustomSvgProps } from "@/types"
import Svg, { Path } from "react-native-svg"

const User: React.FC<CustomSvgProps> = ({ color = "#000", ...props }) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 30 31"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.333 6.867a6.667 6.667 0 1113.333 0 6.667 6.667 0 01-13.333 0zm0 10A8.333 8.333 0 000 25.2a5 5 0 005 5h20a5 5 0 005-5 8.333 8.333 0 00-8.333-8.333H8.333z"
                fill={color}
            />
        </Svg>
    )
}

export default User