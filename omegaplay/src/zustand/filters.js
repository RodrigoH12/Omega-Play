import create from 'zustand';

const useStore = create((set) => ({
    genre: "All",
    date: "All",
    country: "All",
    setGenre: (data) => {
        set((state)=>({genre : data}));
    },
    setDate: (data) => {
        set((state)=>({date : data}));
    },
    setCountry: (data) => {
        set((state)=>({country : data}));
    }
})
);

export default useStore;