import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from '@/app.service';
import { CreateHeroRequest } from '@/request/create-hero.request';
import { Hero } from '@/model/hero.model';


@Controller('superheroes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Creates a new hero based on the given request.
   *
   * @param {CreateHeroRequest} request - The request object containing the hero's name, superpower, and humility score.
   * @throws {BadRequestException} If the request is missing the required fields: name, superpower, or humility score.
   * @return {void} Does not return a value.
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)
  createHero(@Body() request: CreateHeroRequest): void {
    if (!request.name || !request.superpower || !request.humilityScore) {
      throw new BadRequestException(
        "You can't create a hero without name, superpower and humility score",
      );
    }

    this.appService.saveHero(
      request.name,
      request.superpower,
      request.humilityScore,
    );
  }

  /**
   * Retrieves a list of heroes sorted by their humility scores in descending order.
   *
   * @return {Hero[]} An array of Hero objects sorted by humility scores, with the highest score first.
   */
  @Get()
  getHeroesByHumilityScoreDescending(): Hero[] {
    return this.appService.getHeroesByHumilityScoreDescending();
  }
}
