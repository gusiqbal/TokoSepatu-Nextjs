export abstract class BaseProduct {
    public id: number;
    public name: string;
    public category: string;
    public brand: string;
    public image: string
    protected _price: number;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.category = data.category;
        this.image = data.image;
        this.brand = data.brand;
        this._price = +data.price || 0;
    }

    get price(): number {
        return this._price;
    }

    abstract getFormattedPrice(): string; 

}