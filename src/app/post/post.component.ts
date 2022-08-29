import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() onRemove = new EventEmitter<string>();

  ngOnInit(): void {}

  removeBtn() {
    this.onRemove.emit(this.post.id);
  }
}
