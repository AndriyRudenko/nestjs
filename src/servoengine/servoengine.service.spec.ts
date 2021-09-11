import { Test, TestingModule } from '@nestjs/testing';
import { ServoengineService } from './servoengine.service';

describe('ServoengineService', () => {
  let service: ServoengineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServoengineService],
    }).compile();

    service = module.get<ServoengineService>(ServoengineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
