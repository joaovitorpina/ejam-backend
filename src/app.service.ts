import { Injectable } from '@nestjs/common';
import { Hero } from '@/model/hero.model';


/**
 * Service responsible for managing heroes and their attributes.
 * Provides methods for saving hero data and retrieving heroes in a specific order.
 */
@Injectable()
export class AppService {
  private readonly heroStorage: Hero[] = [];

  /**
   * Saves a hero with the specified attributes into the hero storage.
   *
   * @param {string} name - The name of the hero to be saved.
   * @param {string} superpower - The superpower of the hero.
   * @param {number} humilityScore - The humility score of the hero.
   * @return {void} Does not return a value.
   */
  saveHero(name: string, superpower: string, humilityScore: number): void {
    this.heroStorage.push({
      name,
      superpower,
      humilityScore,
    });
  }

  /**
   * Retrieves a list of heroes sorted in descending order by their humility score.
   *
   * @return {Hero[]} An array of Hero objects arranged from highest to lowest humility score.
   */
  getHeroesByHumilityScoreDescending(): Hero[] {
    return this.heroStorage.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
