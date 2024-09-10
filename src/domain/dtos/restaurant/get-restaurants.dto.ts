export class GetRestaurantsDto {
  constructor(
    public city: string,
    public latitude: string,
    public longitude: string 
  ) {}

  static query( object: { [ key: string ]: any; } ): [ string?, GetRestaurantsDto?] {

    const { city, latitude, longitude } = object;

    if ( !city ) return [ 'Missing city' ];
    if ( !latitude ) return ['latitude too short'];
    if ( longitude.length < 5 ) return ['longitude too short'];


    return [
      undefined,
      new GetRestaurantsDto(city, latitude, longitude)
    ];
  }
}