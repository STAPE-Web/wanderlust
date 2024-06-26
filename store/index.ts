import { State } from './types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useGlobalStore = create<State>()(devtools((set) => ({
    isAuth: false,

    changeIsAuth: (value: boolean) => set({ isAuth: value }),
})))

export default useGlobalStore