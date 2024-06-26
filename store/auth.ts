import { AuthFieldType, AuthState } from './types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useAuthStore = create<AuthState>()(devtools((set) => ({
    step: 0,
    login: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
    username: "",
    day: "",
    month: "",
    year: "",
    gender: "",
    countryBorn: "",
    countryLive: "",

    changeStep: (value: number) => set({ step: value }),
    changeData: (value: string, type: AuthFieldType) => {
        switch (type) {
            case "login": set({ login: value })
                break;
            case "email": set({ email: value })
                break;
            case "phone": set({ phone: value })
                break;
            case "password": set({ password: value })
                break;
            case "repeatPassword": set({ repeatPassword: value })
                break;
            case "username": set({ username: value })
                break;
            case "day": set({ day: value })
                break;
            case "month": set({ month: value })
                break;
            case "year": set({ year: value })
                break;
            case "gender": set({ gender: value })
                break;
            case "countryBorn": set({ countryBorn: value })
                break;
            case "countryLive": set({ countryLive: value })
                break;
        }
    }
})))

export default useAuthStore