import { appState } from "../AppState.js";
import { House } from "../Models/House.js";


const sandbox = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api',
    timeout: 10000

})


class HousesService {

    async getAllHouses() {
        const res = await sandbox.get('houses')
        console.log('got all houses', res.data);
        appState.houses = res.data.map(house => new House(house))
        console.log(appState.houses, 'appState houses');
    }



}



export const housesService = new HousesService() 