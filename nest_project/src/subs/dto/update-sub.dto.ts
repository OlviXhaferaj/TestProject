import { PartialType } from '@nestjs/mapped-types';
import { CreateSubDto } from './create-sub.dto';

export class UpdateSubDto extends PartialType(CreateSubDto) {
    subjects:{
        maths: {
            type:string,
            enum: ['A','B','C','D','E','F']
        }
        english: {
            type:string,
            enum: ['A','B','C','D','E','F']
        }
        physics: {
            type:string,
            enum: ['A','B','C','D','E','F']
        }
        chemistry: {
            type:string,
            enum: ['A','B','C','D','E','F']
        }
        history: {
            type:string,
            enum: ['A','B','C','D','E','F']
        }
        sports: {
            type:string,
            enum: ['A','B','C','D','E','F']
        }
    }
}
