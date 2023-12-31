import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
  Req,
} from '@nestjs/common';
import { VacationsService } from './vacations.service';
import { CreateVacationDto } from './dto/create-vacation.dto';
import { UpdateVacationDto } from './dto/update-vacation.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('vacations')
export class VacationsController {
  constructor(private readonly vacationsService: VacationsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createVacationDto: CreateVacationDto) {
    return this.vacationsService.create(createVacationDto);
  }

  @Get()
  findAll() {
    return this.vacationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vacationsService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVacationDto: UpdateVacationDto,
    @Req() request,
  ) {
    return this.vacationsService.update(+id, updateVacationDto, request.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string, @Req() request) {
    return this.vacationsService.remove(+id, request.user);
  }
}
