import { Component, inject, signal } from '@angular/core';
import { Divider } from "primeng/divider";
import { ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';
import { SettingService } from '../setting.service';
import { MyConfirm } from '../../shared/module/my-confirm/my-confirm.service';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ProgressBarModule } from 'primeng/progressbar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ButtonModule } from 'primeng/button';
import { MemberInfoInterface } from '../interface';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePasswordComponent } from './update-password/update-password.component';

@Component({
	selector: 'app-member-info',
	imports: [Divider, ReactiveFormsModule, MatButtonModule, MatRadioModule, ProgressBarModule, ButtonModule],
	templateUrl: './member-info.html',
	styleUrl: './member-info.scss'
})

export class MemberInfo {

	private formBuilder = inject(FormBuilder);
	private settingService = inject(SettingService);
	private myConfirm = inject(MyConfirm);
	private _snackBar = inject(MatSnackBar);
	private dialog = inject(MatDialog);

	protected myForm = this.formBuilder.group({
		member_information: this.formBuilder.group({
			name: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			gender: ['', Validators.required],
			telephone: this.formBuilder.group({
				nation_code: ['', [Validators.pattern("^[0-9]+$"),Validators.maxLength(4), Validators.required]],
				area_code: ['', [Validators.pattern("^[0-9]+$"),Validators.maxLength(6),Validators.required]],
				telephone_number: ['',[Validators.pattern("^[0-9]+$"),Validators.maxLength(30), Validators.required]],
				extension_number: ['',[Validators.pattern("^[0-9]+$"),Validators.maxLength(20)]]
			}),
			mobile_phone: this.formBuilder.group({
				nation_code: ['', [Validators.pattern("^[0-9]+$"),Validators.maxLength(4), Validators.required]],
				mobile_number: ['', [Validators.pattern("^[0-9]+$"),Validators.maxLength(14), Validators.required]]
			})
		}),
		contact_information: this.formBuilder.group({
			name: ['', Validators.required],
			gender: ['', Validators.required],
			email: ['', [Validators.required, Validators.email]],
			telephone: this.formBuilder.group({
				nation_code: ['', [Validators.pattern("^[0-9]+$"),Validators.maxLength(4), Validators.required]],
				area_code: ['', [Validators.pattern("^[0-9]+$"),Validators.maxLength(6),Validators.required]],
				telephone_number: ['',[Validators.pattern("^[0-9]+$"),Validators.maxLength(30), Validators.required]],
				extension_number: ['',[Validators.pattern("^[0-9]+$"),Validators.maxLength(20)]]
			}),
			mobile_phone: this.formBuilder.group({
				nation_code: ['', [Validators.pattern("^[0-9]+$"),Validators.maxLength(4), Validators.required]],
				mobile_number: ['', [Validators.pattern("^[0-9]+$"),Validators.maxLength(14), Validators.required]]
			})
		}),
		verification_method: [-1, Validators.required]
	});

	protected loading = signal(true);
	protected submitLoading = signal(false);

	ngOnInit(): void {
		this.getInfo();
	}

	getInfo() {
		this.settingService.getMemberInfo().subscribe({
			next: (res) => {
				this.myForm.patchValue(res.data);
				this.loading.set(false);
			},
			error: (err) => {
				this.loading.set(false);
				this._snackBar.open('取得會員資訊失敗，請稍後再試','',{
					duration: 5000,
					panelClass:'error'
				});
			}
		});
	}

	updatePassword() {
		const dialogRef = this.dialog.open(UpdatePasswordComponent, {
			panelClass:'my-dialog',
			width:'600px',
			maxWidth:'90vw',
			autoFocus: false,
		});
	}

	check(){
        if(this.myForm.valid)
        {
            this.myConfirm.confirm({
                title: '確定要更新資訊嗎?',
                icon: 'alert'
            }).then(
                result=>{
					 this.submit();
				},
                cancel=>{
                    return false;
                }
			);
		}
		else
        {
            if(this.myForm.get('member_information.name')?.errors?.['required'])
            {
                this._snackBar.open('請填寫會員姓名','',{
                    duration: 1500,
                    panelClass:'warn'
                });
            }
            else if(this.myForm.get('member_information.telephone.nation_code')?.errors?.['required'])
            {
                this._snackBar.open('請填寫會員電話國碼','',{
                    duration: 1500,
                    panelClass:'warn'
                });
            }
            else if (this.myForm.get('member_information.telephone.nation_code')?.errors?.['pattern'])
            {
                this._snackBar.open('會員電話國碼請填寫0~9的數字', '', {
                    duration: 1500,
                    panelClass: 'warn'
                });
            }
            else if(this.myForm.get('member_information.telephone.nation_code')?.errors?.['maxlength'])
            {
                this._snackBar.open('會員電話國碼最多填寫4碼','',{
                    duration: 1500,
                    panelClass:'warn'
                });
            }
            else if(this.myForm.get('member_information.telephone.area_code')?.errors?.['required'])
			{
				this._snackBar.open('請填寫會員電話區碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if (this.myForm.get('member_information.telephone.area_code')?.errors?.['pattern'])
			{
				this._snackBar.open('會員電話區碼請填寫0~9的數字', '', {
					duration: 1500,
					panelClass: 'warn'
				});
			}
			else if(this.myForm.get('member_information.telephone.area_code')?.errors?.['maxlength'])
			{
				this._snackBar.open('會員電話區碼最多填寫6碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if(this.myForm.get('member_information.telephone.telephone_number')?.errors?.['required'])
			{
				this._snackBar.open('請填寫會員電話號碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if (this.myForm.get('member_information.telephone.telephone_number')?.errors?.['pattern'])
			{
				this._snackBar.open('會員電話號碼請填寫0~9的數字', '', {
					duration: 1500,
					panelClass: 'warn'
				});
			}
			else if(this.myForm.get('member_information.telephone.telephone_number')?.errors?.['maxlength'])
			{
				this._snackBar.open('會員電話號碼最多填寫30碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if (this.myForm.get('member_information.telephone.extension_number')?.errors?.['pattern'])
			{
				this._snackBar.open('會員電話分機請填寫0~9的數字', '', {
					duration: 1500,
					panelClass: 'warn'
				});
			}
			else if(this.myForm.get('member_information.telephone.extension_number')?.errors?.['maxlength'])
			{
				this._snackBar.open('會員電話分機最多填寫20碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if(this.myForm.get('member_information.mobile_phone.nation_code')?.errors?.['required'])
			{
				this._snackBar.open('請填寫會員手機國碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if (this.myForm.get('member_information.mobile_phone.nation_code')?.errors?.['pattern'])
			{
				this._snackBar.open('會員手機國碼請填寫0~9的數字', '', {
					duration: 1500,
					panelClass: 'warn'
				});
			}
			else if(this.myForm.get('member_information.mobile_phone.nation_code')?.errors?.['maxlength'])
			{
				this._snackBar.open('會員手機國碼最多填寫4碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if(this.myForm.get('member_information.mobile_phone.mobile_number')?.errors?.['required'])
			{
				this._snackBar.open('請填寫會員手機號碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if (this.myForm.get('member_information.mobile_phone.mobile_number')?.errors?.['pattern'])
			{
				this._snackBar.open('會員手機號碼請填寫0~9的數字', '', {
					duration: 1500,
					panelClass: 'warn'
				});
			}
			else if(this.myForm.get('member_information.mobile_phone.mobile_number')?.errors?.['maxlength'])
			{
				this._snackBar.open('會員手機號碼最多填寫14碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if(this.myForm.get('contact_information.name')?.errors?.['required'])
            {
                this._snackBar.open('請填寫聯絡人姓名','',{
                    duration: 1500,
                    panelClass:'warn'
                });
            }
			else if(this.myForm.get('contact_information.telephone.nation_code')?.errors?.['required'])
			{
				this._snackBar.open('請填寫聯絡人電話國碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if (this.myForm.get('contact_information.telephone.nation_code')?.errors?.['pattern'])
			{
				this._snackBar.open('聯絡人電話國碼請填寫0~9的數字', '', {
					duration: 1500,
					panelClass: 'warn'
				});
			}
			else if(this.myForm.get('contact_information.telephone.nation_code')?.errors?.['maxlength'])
			{
				this._snackBar.open('聯絡人電話國碼最多填寫4碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if(this.myForm.get('contact_information.telephone.area_code')?.errors?.['required'])
			{
				this._snackBar.open('請填寫聯絡人電話區碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if (this.myForm.get('contact_information.telephone.area_code')?.errors?.['pattern'])
			{
				this._snackBar.open('聯絡人電話區碼請填寫0~9的數字', '', {
					duration: 1500,
					panelClass: 'warn'
				});
			}
			else if(this.myForm.get('contact_information.telephone.area_code')?.errors?.['maxlength'])
			{
				this._snackBar.open('聯絡人電話區碼最多填寫6碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if(this.myForm.get('contact_information.telephone.telephone_number')?.errors?.['required'])
			{
				this._snackBar.open('請填寫聯絡人電話號碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if (this.myForm.get('contact_information.telephone.telephone_number')?.errors?.['pattern'])
			{
				this._snackBar.open('聯絡人電話號碼請填寫0~9的數字', '', {
					duration: 1500,
					panelClass: 'warn'
				});
			}
			else if(this.myForm.get('contact_information.telephone.telephone_number')?.errors?.['maxlength'])
			{
				this._snackBar.open('聯絡人電話號碼最多填寫30碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if (this.myForm.get('contact_information.telephone.extension_number')?.errors?.['pattern'])
			{
				this._snackBar.open('聯絡人電話分機請填寫0~9的數字', '', {
					duration: 1500,
					panelClass: 'warn'
				});
			}
			else if(this.myForm.get('contact_information.telephone.extension_number')?.errors?.['maxlength'])
			{
				this._snackBar.open('聯絡人電話分機最多填寫20碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if(this.myForm.get('contact_information.mobile_phone.nation_code')?.errors?.['required'])
			{
				this._snackBar.open('請填寫聯絡人手機國碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if (this.myForm.get('contact_information.mobile_phone.nation_code')?.errors?.['pattern'])
			{
				this._snackBar.open('聯絡人手機國碼請填寫0~9的數字', '', {
					duration: 1500,
					panelClass: 'warn'
				});
			}
			else if(this.myForm.get('contact_information.mobile_phone.nation_code')?.errors?.['maxlength'])
			{
				this._snackBar.open('聯絡人手機國碼最多填寫4碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if(this.myForm.get('contact_information.mobile_phone.mobile_number')?.errors?.['required'])
			{
				this._snackBar.open('請填寫聯絡人手機號碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if (this.myForm.get('contact_information.mobile_phone.mobile_number')?.errors?.['pattern'])
			{
				this._snackBar.open('聯絡人手機號碼請填寫0~9的數字', '', {
					duration: 1500,
					panelClass: 'warn'
				});
			}
			else if(this.myForm.get('contact_information.mobile_phone.mobile_number')?.errors?.['maxlength'])
			{
				this._snackBar.open('聯絡人手機號碼最多填寫14碼','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if(this.myForm.get('contact_information.email')?.errors?.['required'])
			{
				this._snackBar.open('請填寫聯絡人信箱','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
			else if(this.myForm.get('contact_information.email')?.errors?.['email'])
			{
				this._snackBar.open('聯絡人信箱格式有誤','',{
					duration: 1500,
					panelClass:'warn'
				});
			}
		}
	}

	submit() {
		this.submitLoading.set(true);
		this.settingService.updateMemberInfo(this.myForm.value as MemberInfoInterface).subscribe({
			next: (res) => {
				this._snackBar.open('會員資訊儲存成功','',{
					duration: 1500,
					panelClass:'success'
				});
				this.submitLoading.set(false);
			},
			error: (err) => {
				this._snackBar.open('會員資訊儲存失敗，請稍後再試','',{
					duration: 1500,
					panelClass:'error'
				});
				this.submitLoading.set(false);
			}
		});
		
	}

	get gender() {
        return this.myForm.get('member_information.gender');
    }

	get member_email() {
		return this.myForm.get('member_information.email');
	}

}
