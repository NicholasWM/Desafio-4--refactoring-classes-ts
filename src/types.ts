export interface FoodProperties {
    "id": number;
    "name": string;
    "description": string;
    "price": string;
    "available": boolean;
    "image": string;
}

export type FoodInput = Omit<FoodProperties, 'id'>;
