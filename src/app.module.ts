import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [PrismaModule, UserModule, CategoriesModule, PostsModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
