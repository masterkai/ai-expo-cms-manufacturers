import { Component, signal } from '@angular/core';

@Component({
	selector: 'app-modify-review-process-record',
	imports: [],
	templateUrl: './modify-review-process-record.html',
	styleUrl: './modify-review-process-record.scss'
})
export class ModifyReviewProcessRecord {
	modifyProcess = signal([
		{
			updatedBy: 'John Doe',
			columnName: 'Status',
			updateTime: '2024-06-01 10:00 AM',
			oldValue: 'Pending',
			newValue: 'Approved'
		},
		{
			updatedBy: 'Jane Smith',
			columnName: 'Reviewer',
			updateTime: '2024-06-02 02:30 PM',
			oldValue: 'Alice Johnson',
			newValue: 'Bob Brown'
		}
	])
}
