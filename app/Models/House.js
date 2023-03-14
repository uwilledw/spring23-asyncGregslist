


export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
    }



    get HouseCard() {
        return `
        <div class="col-6 col-md-4">
        <div class="bg-light rounded elevation-5">
            <img class="img-fluid" src="${this.imgUrl}" alt="${this.year}">
            <h5 class="p-2 text-center text-dark">${this.year} | ${this.bedrooms} Bed| ${this.bathrooms} Bath</h5>
            <p class="text-dark">${this.price}</p>
            <p class="text-warning">${this.description}</p>
            <button class="btn btn-danger" onclick=""> <i class="mdi mdi-delete-forever"></i></button>
            <button class="btn btn-warning" onclick="" data-bs-toggle="modal"
            data-bs-target="#edit-modal"><i class="mdi mdi-pen"></i></button>
        </div>
        </div>
        `
    }
}