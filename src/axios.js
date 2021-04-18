import axios from "axios";

const instance= axios.create({
    baseURL:"https://api.themoviedb.org/3",
})
/*
instance.get('/foo-bor');
this will search like
https://api.themoviedb.org/3/foo-bor
 */
export default instance;