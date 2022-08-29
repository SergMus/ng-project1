import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Post } from '../app.component';
import { AppCounterService } from '../services/app-counter.service';
import { LocalCounterService } from '../services/local-counter.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
  providers: [LocalCounterService],
})
export class PostFormComponent implements OnInit {
  title = '';
  text = '';

  id = Date.now().toString();

  list: { name: string; type: string }[] = [
    { type: 'title', name: 'filter by title' },
    { type: 'text', name: 'filter by text' },
  ];

  @Output() onAddPost: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() onInputFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('inputForm') inputRef: ElementRef;

  constructor(
    public LocalCounterService: LocalCounterService,
    public AppCounterService: AppCounterService
  ) {}

  ngOnInit(): void {}

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text,
        id: this.id,
      };

      this.onAddPost.emit(post);
      this.title = this.text = '';
    }
  }

  addFocus() {
    this.inputRef.nativeElement.focus();
  }

  inputChange(inp: HTMLInputElement) {
    this.onInputFilter.emit(inp.value);
  }

  selectInputType(inpType: HTMLSelectElement) {
    this.onSelect.emit(inpType.value);
  }
}
