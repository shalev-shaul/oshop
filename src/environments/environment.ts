// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { BehaviorSubject } from 'rxjs';

export const environment = {
  production: false,
};

export const users = [
  {
    username: 'shalev',
    password: '1234',
    isAdmin: true,
  },
  {
    username: 'ron',
    password: '123',
    isAdmin: false,
  },
];

export const categories = [
  'Bread',
  'Dairy',
  'Alpha',
  'Fruits',
  'Seasonings and Spices',
  'Vegetables',
];

export const products = new BehaviorSubject([
  {
    id: '1',
    title: 'Spinach',
    price: '150',
    category: 'Bread',
    imageUrl:
      'http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg',
  },
  {
    id: '2',
    title: 'Second',
    price: '120',
    category: 'Dairy',
    imageUrl:
      'https://www.yogurtinnutrition.com/wp-content/uploads/2019/09/yinimodel_post_ukdairydiet-1280x720.png',
  },
  {
    id: '3',
    title: 'Third',
    price: '100',
    category: 'Fruits',
    imageUrl:
      'https://lh3.googleusercontent.com/proxy/93-4bGk9fIvy7HBQcyJ38Rd1JB3QWv9SFRL8-U5N_OAtbYklo969aZLVn5YP9o4LyhET4AY5uDtxxtUlDyTqenBCTGUbrf7rcfuIbCVGqjIF4Dx7JJVbeX90cCu0KLfd5P334-qIyosYA26ET38Ld5rGfXOAMpw6XA',
  },
]);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
