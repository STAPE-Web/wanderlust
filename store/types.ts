export interface State {
    isAuth: boolean,

    changeIsAuth: (value: boolean) => void
}

export type AuthFieldType = "login" | "email" | "phone" | "password" | "repeatPassword" | "username" | "day" | "month" | "year" | "gender" | "countryBorn" | "countryLive";

export interface AuthState {
    step: number,
    login: string,
    email: string,
    phone: string,
    password: string,
    repeatPassword: string,
    username: string,
    day: string,
    month: string,
    year: string,
    gender: string,
    countryBorn: string,
    countryLive: string,

    changeStep: (value: number) => void
    changeData: (value: string, type: AuthFieldType) => void
}

export type TripFieldType = "name" | "description" | "image" | "location" | "startDate" | "endDate";

export interface TripState {
    step: number,
    name: string,
    description: string,
    image: string,
    location: string,
    startDate: string,
    endDate: string,

    changeStep: (value: number) => void
    changeData: (value: string, type: TripFieldType) => void
}