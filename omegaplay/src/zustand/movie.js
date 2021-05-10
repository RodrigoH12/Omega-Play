import create from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    movie: {},
    setMovieId: (movieobj) => {set((state)=>({movie : movieobj}));},
    /*
    fetchMovieId: async (id) => {
        try {
            const { data } = await axios.get('http://localhost:4004/api/movie/id', {
                headers: {
                  'id': id,
                }
              });
            set((state)=>({user : data}));
        } catch (err) {
            console.err(err);
        }
    },*/
})
);

export default useStore;