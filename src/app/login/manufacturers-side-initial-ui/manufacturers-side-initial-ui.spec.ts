import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturersSideInitialUi } from './manufacturers-side-initial-ui';

describe('ManufaturersSideInitialUi', () => {
	let component: ManufacturersSideInitialUi;
	let fixture: ComponentFixture<ManufacturersSideInitialUi>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
				imports: [ManufacturersSideInitialUi]
			})
			.compileComponents();

		fixture = TestBed.createComponent(ManufacturersSideInitialUi);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
