import create from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    user: [{}],
    fetchUser: async (username, password) => {
        try {
            const { data } = await axios.get('http://localhost:4004/api/user', {
                headers: {
                  'username': username,
                  'password': password
                }
              });
            set((state)=>({user : data}));
        } catch (err) {
            console.err(err);
        }
    },
    registerUser: async (userObject) => {
        try {
            const { data } = await axios.post('http://localhost:4004/api/user', {
                userObject
              });
            set((state)=>({user : data}));
        } catch (err) {
            console.err(err);
        }
    },
    addAvatar: async (userObject, avatar) => {
        try {
            const { data } = await axios.put(`http://localhost:4004/api/user?userName=${userObject[0].userName}&avatar=${avatar}`);
            set((state)=>({user : data}));
        } catch (err) {
            console.err(err);
        }
    },
})
);

export default useStore;