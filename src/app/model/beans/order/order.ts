import { Product } from "src/app/model/beans/product/product.model";

export interface Representative {
    name?: string;
    image?: string;
}

export class Order {
    id?: number;
    numCommande?: string;
    name?: number;
    nbArticles?: number;
    montantHT?: number;
    montantTTC?: number;
    tva?: number;
    livraison?: string;
    date?: string;
    status?: string;
    adress?: string;
    modePaiement?: string;
    products?: Product[] = [];
    representative?: Representative;

    constructor(products: Product[]) {
        this.products = products;
      }
}