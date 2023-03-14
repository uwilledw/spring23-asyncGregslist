import { appState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
// import { House } from "../Models/House.js";



function _drawHouses() {
    console.log('drawing houses');
    let houses = appState.houses
    let template = ''
    houses.forEach(h => template += h.HouseCard)
    console.log('house template');
    setHTML('houseListings', template)
}




export class HousesController {

    constructor() {
        console.log('house controller');
        // this.getAllHouses()
        appState.on('houses', _drawHouses)
    }

    viewHouses() {
        this.getAllHouses()
    }



    async getAllHouses() {
        try {
            await housesService.getAllHouses()
        } catch (error) {
            console.error(error)
            Pop.error(error)
        }
    }



}