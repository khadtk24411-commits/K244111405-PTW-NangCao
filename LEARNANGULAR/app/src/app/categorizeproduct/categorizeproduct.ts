import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogService } from '../service/catalog-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categorizeproduct',
  templateUrl: './categorizeproduct.html',
  standalone:false,
  styleUrl: './categorizeproduct.css',
})
export class Categorizeproduct {

  categories: any[] = [];

  constructor(private catalogService: CatalogService) {
    this.categories = this.catalogService.getCategories();
  }
}