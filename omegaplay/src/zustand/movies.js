import create from 'zustand';
import axios from 'axios';

const useStoreMovies = create((set) => ({
    movies: [{
        genres: [{}],
        directors: [{}],
        cast: [{}],
        title: '',
        src: '',
        images: [{}],
        releaseDate: {},
        duration: '',
        calification: 0,
        country: '',
        summary: '',
        productionCompany: ''
    }],
    getMoviesAxios: async () => {
        try {
            const { data } = await axios.get('http://localhost:4004/api/movie');
            set((state) => ({ movies: data }));
        } catch (err) {
            console.log(err);
        }
    },
    getHistoryAxios: async (user) => {
        try {
            const { data } = await axios.get('http://localhost:4004/api/user/' + user[0]._id + '/history');
            set((state) => ({ movies: data[0].history }));
        } catch (err) {
            console.log(err);
        }
    },
    getWatchLaterAxios: async (user) => {
        try {
            const { data } = await axios.get('http://localhost:4004/api/user/' + user[0]._id + '/watch-later');
            set((state) => ({ movies: data[0].watchLater }));
        } catch (err) {
            console.log(err);
        }
    }
})
);

export default useStoreMovies;