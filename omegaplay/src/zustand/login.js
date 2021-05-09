import create from 'zustand';
import axios from 'axios';

const useStore = create((set) => ({
    user: [],
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
    /*fetchUsers: async () => {
        try {
            const { data } = await axios.get('http://localhost:4004/api/user');
            console.log(data);
            set({users : data});
        } catch (err) {
            console.err(err);
        }
    }*/
})
);

export default useStore;