import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateHeroRequest {
  @IsString()
  @IsNotEmpty()
  name: string | undefined;

  @IsString()
  @IsNotEmpty()
  superpower: string | undefined;

  @IsNumber()
  @Min(1)
  @Max(10)
  humilityScore: number | undefined;
}
