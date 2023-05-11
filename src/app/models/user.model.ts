export interface User {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  geo: GeoLocation,
  phone: string,
  website: string,
  company: Company,
}

export interface UsersWithAlbums extends User {
  albumsNumber: number;
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
}

interface GeoLocation {
  lat: string,
  lng: string,
}

interface Company {
  name: string,
  catchphrase: string,
  bs: string,
}
