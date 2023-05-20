import {Component} from '@angular/core';
import {SearchBoxComponent, SearchBoxSuggestionSelectedEvent} from "@spartacus/storefront";
import {Suggestion} from "@spartacus/core";

@Component({
  selector: 'st-search-box',
  templateUrl: './st-search-box.component.html',
  styleUrls: ['./st-search-box.component.scss']
})
export class StSearchBoxComponent extends SearchBoxComponent {
  dispatchSuggestion(searchInput: string, suggestion: string, suggestions: string[] = []): void {
    const eventData: SearchBoxSuggestionSelectedEvent = {
      freeText: searchInput,
      selectedSuggestion: suggestion,
      searchSuggestions: suggestions.map((suggestion: string) => ({ value: suggestion } as Suggestion))
    };

    this.dispatchSuggestionEvent(eventData);
  }
}
