import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { TableModule } from "primeng/table";
import { Button } from "primeng/button";

@Component({
	selector: 'app-modify-review-process-record',
	standalone: true,
	imports: [CommonModule, TabsModule, TableModule, Button],
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
		},
		{
			updatedBy: 'Mike Wilson',
			columnName: 'Comments',
			updateTime: '2024-06-03 09:15 AM',
			oldValue: 'Needs more info',
			newValue: 'All info provided'
		},
		{
			updatedBy: 'Emily Davis',
			columnName: 'Deadline',
			updateTime: '2024-06-04 11:45 AM',
			oldValue: '2024-06-10',
			newValue: '2024-06-15'
		},
		{
			updatedBy: 'Chris Martin',
			columnName: 'Priority',
			updateTime: '2024-06-05 03:20 PM',
			oldValue: 'Medium',
			newValue: 'High'
		}, {
			updatedBy: 'Sarah Lee',
			columnName: 'Assigned To',
			updateTime: '2024-06-06 01:10 PM',
			oldValue: 'Team A',
			newValue: 'Team B'
		}
	])
	reviewProcess = signal([
		{
			reviewedBy: 'Anna Scott',
			reviewTime: '2024-06-07 10:30 AM',
			columnName: 'Status',
		},
		{
			reviewedBy: 'David Harris',
			reviewTime: '2024-06-08 02:45 PM',
			columnName: 'Reviewer',
		},
		{
			reviewedBy: 'Laura Young',
			reviewTime: '2024-06-09 09:00 AM',
			columnName: 'Comments',
		},
		{
			reviewedBy: 'James King',
			reviewTime: '2024-06-10 11:15 AM',
			columnName: 'Deadline',
		},
		{
			reviewedBy: 'Olivia Green',
			reviewTime: '2024-06-11 03:40 PM',
			columnName: 'Priority',
		}, {
			reviewedBy: 'Daniel Baker',
			reviewTime: '2024-06-12 01:25 PM',
			columnName: 'Assigned To',
		}
	])

	protected exportExcelModify() {

	}

	protected exportExcelReview() {

	}
}
