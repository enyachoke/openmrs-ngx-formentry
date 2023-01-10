/**
 * time-picker.component
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import moment, { Moment } from 'moment';

// webpack1_
declare let require: any;
// const myDpStyles: string = require('./time-picker.component.css');
// const myDpTpl: string = require('./time-picker.component.html');
// webpack2_

@Component({
  selector: 'ofe-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {
  @Input() initTime: any;
  @Input() showSecond = true;
  @Input() viewFormat = 'hh:mm A';
  @Input() use12Hour = false;
  @Input() returnObject = 'js';
  @Output() timeSelect = new EventEmitter<any>();
  @Output() timePickerCancel = new EventEmitter<boolean>();
  hourFormat = 'HH';
  public time: Moment;

  constructor() {}

  ngOnInit(): void {
    if (this.use12Hour) {
      this.hourFormat = 'hh';
    }
    this.time = this.initTime
      ? moment(this.initTime, this.viewFormat)
      : moment();

    // check if the input initDate has value
    if (this.initTime) {
      this.time =
        this.returnObject === 'string'
          ? moment(this.initTime, this.viewFormat)
          : moment(this.initTime);
    } else {
      this.time = moment();
    }
  }

  increaseHour(): void {
    this.time = this.time.clone().add(1, 'h');
  }

  decreaseHour(): void {
    this.time = this.time.clone().subtract(1, 'h');
  }

  increaseMinute() {
    this.time = this.time.clone().add(1, 'm');
  }

  decreaseMinute() {
    this.time = this.time.clone().subtract(1, 'm');
  }

  increaseSecond(): void {
    this.time = this.time.clone().add(1, 's');
  }

  decreaseSecond(): void {
    this.time = this.time.clone().subtract(1, 's');
  }

  selectTime(): void {
    const selectTime = this.parseToReturnObjectType(this.time);
    this.timeSelect.emit(selectTime);
    this.cancelTimePicker();
    return;
  }

  selectNow(): void {
    const selectTime = this.parseToReturnObjectType(moment());
    this.timeSelect.emit(selectTime);
    this.cancelTimePicker();
    return;
  }

  clearTime(): void {
    this.timeSelect.emit(null);
    this.cancelTimePicker();
    return;
  }

  cancelTimePicker(): void {
    this.timePickerCancel.emit(false);
    return;
  }

  protected parseToReturnObjectType(time: Moment): any {
    switch (this.returnObject) {
      case 'js':
        return time.toDate();

      case 'string':
        return time.format(this.viewFormat);

      case 'moment':
        return time;

      case 'json':
        return time.toJSON();

      case 'array':
        return time.toArray();

      case 'iso':
        return time.toISOString();

      case 'object':
        return time.toObject();

      default:
        return time;
    }
  }
}
