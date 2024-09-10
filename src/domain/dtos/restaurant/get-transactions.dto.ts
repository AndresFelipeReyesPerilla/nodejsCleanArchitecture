export class GetTransactionsDto {

  private constructor(
    public city: string,
  ) { }

  static query( object: { [ key: string ]: any; } ): [ string?, GetTransactionsDto?] {

    const { city } = object;

    if ( !city ) return [ 'Missing city' ];

    return [
      undefined,
      new GetTransactionsDto(city)
    ];
  }


}