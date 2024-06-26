import { CustomSvgProps } from "@/types"
import Svg, { Path } from "react-native-svg"

const Search: React.FC<CustomSvgProps> = ({ color = "#000", ...props }) => {
    return (
        <Svg
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <Path
                d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Search