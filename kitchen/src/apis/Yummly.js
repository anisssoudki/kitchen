import axios from 'axios';

const KEY = '8d9120e1afmshb6b445981516549p1492cfjsn061d2541e6fb';

//  this code makes an instance of axios that has a base url and some default params loaded into it than we can call it in another file 
export default axios.create({
baseURL: 'https://rapidapi.p.rapidapi.com/feeds',

params: {
    start: '0',
    maxResult: '15',
    FAT_KCALMax: '1000',
    maxTotalTimeInSeconds: '7200'
    
},

headers:{
    'x-rapidapi-key': KEY,
    'x-rapidapi-host': 'yummly2.p.rapidapi.com'     
}

});