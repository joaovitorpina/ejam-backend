
import { BadRequestException } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(() => {
    appService = new AppService();
    appController = new AppController(appService);
  });

  describe('createHero', () => {
    it('should throw BadRequestException when name, superpower, or humilityScore is missing', () => {
      expect(() =>
        appController.createHero({
          name: '',
          superpower: '',
          // @ts-expect-error Needs to force null value to check error
          humilityScore: null,
        }),
      ).toThrow(BadRequestException);
    });

    it('should call saveHero on the service with correct parameters when valid data is provided', () => {
      const spy = jest.spyOn(appService, 'saveHero').mockImplementation();
      appController.createHero({
        name: 'Superman',
        superpower: 'Flight',
        humilityScore: 10,
      });
      expect(spy).toHaveBeenCalledWith('Superman', 'Flight', 10);
    });
  });

  describe('getHeroesByHumilityScoreDescending', () => {
    it('should return heroes sorted by humility score in descending order', () => {
      jest
        .spyOn(appService, 'getHeroesByHumilityScoreDescending')
        .mockReturnValue([
          { name: 'Hero A', superpower: 'Speed', humilityScore: 9 },
          { name: 'Hero B', superpower: 'Strength', humilityScore: 7 },
        ]);
      expect(appController.getHeroesByHumilityScoreDescending()).toEqual([
        { name: 'Hero A', superpower: 'Speed', humilityScore: 9 },
        { name: 'Hero B', superpower: 'Strength', humilityScore: 7 },
      ]);
    });
  });
});
