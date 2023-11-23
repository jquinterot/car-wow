

export type CartCars = {
    id:        string;
    name:      string;
    max_speed: number;
    year:      number
    color:     string;
    hp:        number;
    hybrid:    string;
    price:     number;
    stars:     number;
    country:   string;
    quantity: number;
    url_image: URLImage[];
}[]

export type URLImage = {
    name: string;
    url:  string;
}
