import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { CreateStudentDto } from './studnet-input.dto';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  @Mutation((returns) => StudentType)
  async createStudent(
    @Args('createStudentInput') createStudentDto: CreateStudentDto,
  ) {
    return this.studentService.createStudent(createStudentDto);
  }
}
