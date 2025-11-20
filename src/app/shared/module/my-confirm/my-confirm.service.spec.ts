import { TestBed } from '@angular/core/testing';

import { MyConfirmService } from './my-confirm.service';

describe('MyComfirmService', () => {
	let service: MyConfirmService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(MyConfirmService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
