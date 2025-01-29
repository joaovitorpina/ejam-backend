import { AppService } from '@/app.service';
import { Hero } from '@/model/hero.model';
describe('AppService', () => {
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
  });

  describe('saveHero', () => {
    it('should save a hero to the storage', () => {
      const hero: Hero = {
        name: 'Iron Man',
        superpower: 'Genius',
        humilityScore: 50,
      };

      appService.saveHero(hero.name, hero.superpower, hero.humilityScore);

      // Disabled error because in testing it doesn't maintain full typing in cases
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect((appService as any).heroStorage).toContainEqual(hero);
    });
  });

  describe('getHeroesByHumilityScoreDescending', () => {
    it('should return heroes sorted by humilityScore in descending order', () => {
      const heroes: Hero[] = [
        { name: 'Thor', superpower: 'Godlike Strength', humilityScore: 40 },
        { name: 'Spider-Man', superpower: 'Agility', humilityScore: 80 },
        { name: 'Hulk', superpower: 'Smash', humilityScore: 20 },
      ];

      heroes.forEach((hero) =>
        appService.saveHero(hero.name, hero.superpower, hero.humilityScore),
      );

      const sortedHeroes = appService.getHeroesByHumilityScoreDescending();

      expect(sortedHeroes).toEqual([
        { name: 'Spider-Man', superpower: 'Agility', humilityScore: 80 },
        { name: 'Thor', superpower: 'Godlike Strength', humilityScore: 40 },
        { name: 'Hulk', superpower: 'Smash', humilityScore: 20 },
      ]);
    });
  });
});
