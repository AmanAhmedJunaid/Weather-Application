import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { register as registerSwiper } from 'swiper/element/bundle';
import { AppModule } from './app/app.module';



registerSwiper()
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
