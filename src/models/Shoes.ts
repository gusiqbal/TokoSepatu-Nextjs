import { BaseProduct } from "./BaseProduct";
import { IProduct } from "@/src/types/IProducts";

class Shoes extends BaseProduct implements IProduct {
    public discount: number;

    constructor(data: Partial<Shoes> & {oldPrice?: number, discount?: number}) {
        super(data);
        this.discount = +(data.discount ?? 0);
    }

    getFormattedPrice(): string {
        return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        }).format(this.price);
    }

    get priceAfterDiscount() :string {
        const value = this.price - this.getDiscountAmount();
        return new Intl.NumberFormat("id-ID").format(value);
    }

    hasDiscount(): boolean {
        return !!this.discount && this.discount > 0;
    }

    getDiscountAmount(): number {
        if (!this.hasDiscount()) return 0;
        return (this.price * this.discount) / 100;
    }
}

export default Shoes;
