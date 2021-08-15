import { Delete, Param } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
	
	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {

	}

	@Delete(':id')
	async delete(@Param('id') id: string) {

	}

	@Get('byProduct/:produstId')
	async getByProduct(@Param('productId') productId: string) {

	}

}
