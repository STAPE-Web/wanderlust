import { SvgProps } from "react-native-svg"

export type ICards = {
    id: string,
    category: string,
    title: string,
    location: string,
    image: string
}

export type ITrips = {
    id: string,
    startDate: string,
    endDate: string,
    title: string,
    image: string
}

export type INavigate = {
    icon: React.FC<CustomSvgProps>,
    name: string
    link: string
}

export interface CustomSvgProps extends SvgProps {
    color?: string;
}

export type INotification = {
    type: "firend" | "start" | "welcome" | "welcomeback",
    text: string,
    image: string,
    description: string
}

export type AchivementsType = "6 years" | "win" | "top 100" | "super"