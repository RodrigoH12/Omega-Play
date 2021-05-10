import create from 'zustand';
import axios from 'axios';

const useStoreMovies = create((set) => ({
    movies: [],
    getMoviesAxios: async () => {
        try {
            const {data} = await axios.get('http://localhost:4004/api/movie');
            set((state)=>({movies : data}));
        } catch (err) {
            console.log(err);
        }
    }
})
);

export default useStoreMovies;