import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../app-config';
import { ArticleService } from 'src/services/article.service';
import { Article } from 'src/models/Article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticlesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'year','author', 'icon'];
  dataSource: Article[];
  constructor(
    private articleService : ArticleService,

  ) {
    this.dataSource = this.articleService.articles;

  }

  ngOnInit(): void {
  }

}
