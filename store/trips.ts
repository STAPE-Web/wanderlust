import { TripFieldType, TripState } from './types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useTripsStore = create<TripState>()(devtools((set) => ({
    step: 0,
    name: "",
    description: "",
    image: "",
    location: "",
    startDate: "",
    endDate: "",

    changeStep: (value: number) => set({ step: value }),
    changeData: (value: string, type: TripFieldType) => {
        switch (type) {
            case "name": set({ name: value })
                break;
            case "description": set({ description: value })
                break;
            case "image": set({ image: value })
                break;
            case "location": set({ location: value })
                break;
            case "startDate": set({ startDate: value })
                break;
            case "endDate": set({ endDate: value })
                break;
        }
    }
})))

export default useTripsStore