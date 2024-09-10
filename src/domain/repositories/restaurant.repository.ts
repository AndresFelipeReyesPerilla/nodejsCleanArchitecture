import { RestaurantsEntity } from '../entities/restaurant.entity';
import { GetRestaurantsDto, GetTransactionsDto, LoginUserDto, RegisterUserDto } from '..';




export abstract class RestaurantRepository {

  abstract getRestaurant( getRestaurantsDto: GetRestaurantsDto ):Promise<RestaurantsEntity>;
  abstract getTransactions( getTransactionsDto: GetTransactionsDto ):Promise<RestaurantsEntity>;


}

