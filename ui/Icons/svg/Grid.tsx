import { CustomSvgProps } from "@/types"
import Svg, { Path } from "react-native-svg"

const Grid: React.FC<CustomSvgProps> = ({ color = "#000", ...props }) => {
    return (
        <Svg
            viewBox="0 0 34 34"
            fill="none"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.886 16.904a3.409 3.409 0 013.41 3.41v6.818a3.41 3.41 0 01-3.41 3.409H3.068A3.409 3.409 0 01-.34 27.13v-6.817a3.409 3.409 0 013.41-3.41h6.817zm17.046 0a3.409 3.409 0 013.409 3.41v6.818a3.409 3.409 0 01-3.41 3.409h-6.817a3.409 3.409 0 01-3.41-3.41v-6.817a3.409 3.409 0 013.41-3.41h6.818zM9.886-.14a3.41 3.41 0 013.41 3.41v6.817a3.41 3.41 0 01-3.41 3.41H3.068a3.41 3.41 0 01-3.409-3.41V3.268A3.41 3.41 0 013.07-.14h6.817zm17.046 0a3.409 3.409 0 013.409 3.41v6.817a3.409 3.409 0 01-3.41 3.41h-6.817a3.41 3.41 0 01-3.41-3.41V3.268a3.409 3.409 0 013.41-3.409h6.818z"
                fill={color}
            />
        </Svg>
    )
}

export default Grid