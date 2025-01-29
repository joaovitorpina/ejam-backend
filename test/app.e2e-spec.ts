import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('POST /superheroes', () => {
    it('should create a new hero and return 201 status', async () => {
      const hero = {
        name: 'Superman',
        superpower: 'Flight',
        humilityScore: 10,
      };

      return request(app.getHttpServer())
        .post('/superheroes')
        .send(hero)
        .expect(201);
    });

    it('should return 400 when required fields are missing', async () => {
      const incompleteHero = {
        name: 'Batman',
      };

      return request(app.getHttpServer())
        .post('/superheroes')
        .send(incompleteHero)
        .expect(400);
    });
  });

  describe('GET /superheroes', () => {
    it('should return all heroes sorted by humility score in descending order', async () => {
      const heroes = [
        { name: 'Hero1', superpower: 'Power1', humilityScore: 7 },
        { name: 'Hero2', superpower: 'Power2', humilityScore: 6 },
        { name: 'Hero3', superpower: 'Power3', humilityScore: 10 },
      ];

      for (const hero of heroes) {
        await request(app.getHttpServer()).post('/superheroes').send(hero);
      }

      return request(app.getHttpServer())
        .get('/superheroes')
        .expect(200)
        .expect((res) => {
          expect(res.body).toEqual([
            { name: 'Hero3', superpower: 'Power3', humilityScore: 10 },
            { name: 'Hero1', superpower: 'Power1', humilityScore: 7 },
            { name: 'Hero2', superpower: 'Power2', humilityScore: 6 },
          ]);
        });
    });
  });
});
