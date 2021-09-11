import { Test, TestingModule } from '@nestjs/testing';
import { ServoengineController } from './servoengine.controller';

describe('ServoengineController', () => {
  let controller: ServoengineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServoengineController],
    }).compile();

    controller = module.get<ServoengineController>(ServoengineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
