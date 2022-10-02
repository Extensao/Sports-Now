import axios from 'axios';

const GetEventoAll = (setDataEventoAll) => {
    axios.get('/api/get/evento/all/')
    .then((res)=>{
        setDataEventoAll(res.data);
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {GetEventoAll}