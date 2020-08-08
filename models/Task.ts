import { TASK_STATUS_TO_DO, TASK_STATUS_IN_PROGRESS, TASK_STATUS_CANCELED, TASK_STATUS_DONE } from '../constants';

export default class Task {
    id: number;
    title: string;
    status: string;
  
    constructor(title: string) {
      this.id = new Date().getUTCMilliseconds() + Math.random();
      this.title = title;
      this.status = TASK_STATUS_TO_DO;
    }
  }