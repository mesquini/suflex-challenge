import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('Suflex API')
    .setDescription('')
    .setVersion(process.env.npm_package_version)
    .addTag('Product')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  const port = process.env.PORT || 3333;

  await app
    .listen(port, () => {
      Logger.log(
        `>>>> Starting ${process.env.NODE_ENV} on PORT ${port}`,
        'APP',
      );
    })
    .catch((err) => Logger.error(err));
}
bootstrap();
