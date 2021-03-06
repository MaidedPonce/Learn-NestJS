import { Module, Global } from '@nestjs/common';
const API_KEY = '12345634';
const API_KEY_PROD = 'MAIDEDYELANDRESNEGROUWU'

@Global()
@Module({
    providers: [
        {
            provide: 'API_KEY',
            useValue: process.env.NODE == 'prod' ? API_KEY_PROD : API_KEY
        },
    ],
    exports: ['API_KEY']
})
export class DatabaseModule {}
