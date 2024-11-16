import { create } from 'zustand'

type Store = {
    keepName: string[]
    setKeepName: (value: string[]) => void

}

export const useStoreForKeepName151 = create<Store>()((set) => ({
    keepName: [],
    setKeepName: (value: string[]) => set((state) => ({ keepName: value }))


}))


