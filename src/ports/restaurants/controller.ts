import { Request, Response } from 'express';
import { AuthRepository, CustomError, LoginUser, GetTransactionsDto, RegisterUser, GetRestaurantsDto } from '../../domain';
import { UserModel } from '../../data/mongodb';



export class RestaurantController {

  // DI
  constructor(
    private readonly restaurantRepository: AuthRepository,
  ) {}

  private handleError = ( error: unknown, res: Response ) => {
    if ( error instanceof CustomError ) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(error); // Winston
    return res.status(500).json({ error: 'Internal Server Error' });
  }


  getRestaurants = (req: Request, res: Response ) => {
    const [error, registerUserDto] = GetRestaurantsDto.query(req.body);
    if ( error ) return res.status(400).json({ error });
    
  }


  loginUser = (req: Request, res: Response ) => {
    const [error, loginUserDto] = GetTransactionsDto.query(req.body);
    if ( error ) return res.status(400).json({ error });
    
  }



  getUsers = (req: Request, res: Response ) => {
    
    UserModel.find()
      .then( restaurants => {
        res.json({
          // users,
          user: req.body.user
        }) 
      })
      .catch(()=> res.status(500).json({ error: 'Internal server error' }))

  }


}