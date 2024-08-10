import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  create(task: Task): Promise<Task> {
    return this.tasksRepository.save(task);
  }

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  findOne(id: number): Promise<Task> {
    return this.tasksRepository.findOneBy({ id });
  }

  update(id: number, updateTaskDto: Partial<Task>): Promise<Task> {
    return this.tasksRepository.save({ ...updateTaskDto, id });
  }

  remove(id: number): Promise<void> {
    return this.tasksRepository.delete(id).then(() => {});
  }
}
