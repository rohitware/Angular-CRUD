import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  arrFeedback: string[];
  feedback=[];

  constructor(private _feebackService: FeedbackService) { }

  ngOnInit() {

    this._feebackService.getfeedback()
    .subscribe(Data => this.arrFeedback = Data);

  }


}
