import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EVENT_LIST, YraEvent } from '../../data/eventList';

@Component({
  selector: 'app-events',
  imports: [CommonModule, RouterLink],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  allEvents = EVENT_LIST;

  category = signal<string | null>(null);
  fee = signal<string | null>(null);

  filteredEvents = signal<YraEvent[]>(EVENT_LIST);

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const cat = params.get('category');
      const feeKey = params.get('fee');

      this.category.set(cat);
      this.fee.set(feeKey);

      let result = [...this.allEvents];

      if (cat) {
        result = result.filter((e) => e.title.toLowerCase() === cat.toLowerCase());
      }

      if (feeKey === 'free') {
        result = result.filter((e) => e.hasFee === false);
      } else if (feeKey === 'paid') {
        result = result.filter((e) => e.hasFee === true);
      }

      this.filteredEvents.set(result);
    });
  }

  filterByCategory(category: string) {
    this.router.navigate(['/events'], {
      queryParams: { category },
    });
  }

  filterFree() {
    this.router.navigate(['/events'], {
      queryParams: { fee: 'free' },
    });
  }

  filterPaid() {
    this.router.navigate(['/events'], {
      queryParams: { fee: 'paid' },
    });
  }

  clearFilters() {
    this.router.navigate(['/events']);
  }

  applyMultipleFilters() {
    this.router.navigate(['/events'], {
      queryParams: {
        category: 'SPSS',
        fee: 'free',
      },
    });
  }
}
