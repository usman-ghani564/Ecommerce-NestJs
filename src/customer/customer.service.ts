import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Customer} from './customer.entity';

@Injectable()
export class CustomerService {
    constructor(
        @InjectRepository(Customer)
        private productRepository: Repository<Customer>,
    ){}

    findAll(): Promise<Customer[]> {
        return this.productRepository.find();
    }
}
