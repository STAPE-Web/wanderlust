import { CustomSvgProps } from "@/types"
import Svg, { Path } from "react-native-svg"

const Home: React.FC<CustomSvgProps> = ({ color = "#000", ...props }) => {
    return (
        <Svg
            fill="none"
            viewBox="0 0 34 34"
            {...props}
        >
            <Path
                d="M32 29.067V17.845a6.668 6.668 0 00-2.075-4.833L19.297 2.917a3.333 3.333 0 00-4.592 0L4.075 13.012A6.666 6.666 0 002 17.845v11.222A3.333 3.333 0 005.333 32.4h23.334A3.333 3.333 0 0032 29.067z"
                stroke={color}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M12 22.4a3.333 3.333 0 013.333-3.333h3.334A3.333 3.333 0 0122 22.4v10H12v-10z"
                stroke={color}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default Home