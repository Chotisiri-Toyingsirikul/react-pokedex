import { create } from 'zustand'

type Store = {
    count: number
    updateCount: () => void
    username: string
    setUsername: (value: string) => void
}

export const useCounterStore = create<Store>()((set) => ({
    count: 1,
    updateCount: () => set((state) => (
        { count: state.count + 1 }
    )),

    username: '',
    setUsername: (value: string) => set(() => ({ username: value })),
}))


