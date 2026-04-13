export interface IProduct {
    discount: number;
    hasDiscount(): boolean;
    getDiscountAmount(): number;
}