import { Injectable } from '@angular/core';

import { GLOBAL } from 'src/app/app-config';
import { Article } from 'src/models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public articles: Article[] = GLOBAL._DB.articles;

  constructor() { }
}
