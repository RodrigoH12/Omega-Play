import create from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    user: [{
        username: '',
        password: '',
        email: '',
        genre: '',
        birthDate: {},
        country: '',
        city: '',
        img: '1',
        watchLater: [],
        history: []
    }],
    fetchUser: async (username, password) => {
        try {
            const { data } = await axios.get('http://localhost:4004/api/user', {
                headers: {
                    'username': username,
                    'password': password
                }
            });
            set((state) => ({ user: data }));
        } catch (err) {
            console.err(err);
        }
    },
    registerUser: async (userObject) => {
        try {
            const { data } = await axios.post('http://localhost:4004/api/user', {
                userObject
            });
            set((state) => ({ user: data }));
        } catch (err) {
            console.err(err);
        }
    },
    addAvatar: async (userObject, avatar) => {
        try {
            const { data } = await axios.put(`http://localhost:4004/api/user?userName=${userObject[0].userName}&avatar=${avatar}`);
            set((state) => ({ user: data }));
        } catch (err) {
            console.err(err);
        }
    },
    addMovieHistory: async (userObject, movie) => {
        try {
            const { data } = await axios.put(`http://localhost:4004/api/user/history?userName=${userObject[0].userName}&movie=${movie}`);
            set((state) => ({ user: data }));
        } catch (err) {
            console.err(err);
        }
    },
    addMovieLater: async (userObject, movie) => {
        try {
            const { data } = await axios.put(`http://localhost:4004/api/user/watch-later?userName=${userObject[0].userName}&movie=${movie}`);
            set((state) => ({ user: data }));
        } catch (err) {
            console.err(err);
        }
    },
})
);

export default useStore;