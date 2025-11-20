import { Component, inject } from '@angular/core';
import { MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RecaptchaV3Module, ReCaptchaV3Service } from "ng-recaptcha";
import { ReactiveFormsModule,FormBuilder,Validators } from '@angular/forms';
import { passwordValidator,passwordConfirmValidator } from './password-validator.directive';
import { ButtonModule } from 'primeng/button';
import { MyConfirm } from '../../../shared/module/my-confirm/my-confirm.service';
import { SettingService } from '../../setting.service';

@Component({
    selector: 'app-update-password',
    standalone: true,
    imports: [MatDialogModule,MatButtonModule,RecaptchaV3Module,ReactiveFormsModule,ButtonModule],
    templateUrl: './update-password.component.html',
    styleUrl: './update-password.component.scss'
})

export class UpdatePasswordComponent {

    private formBuilder = inject(FormBuilder);
    private recaptchaV3Service = inject(ReCaptchaV3Service);
    private dialogRef = inject(MatDialogRef<UpdatePasswordComponent>);
    private myConfirm = inject(MyConfirm);
    private settingService = inject(SettingService);


    public myForm = this.formBuilder.group({
        old_password: ['', [Validators.required]],
        password: ['',[Validators.required,Validators.minLength(8),passwordValidator()]],
        password_checked: ['',[Validators.required]],
    },{ validators: passwordConfirmValidator() });


    public loading=false;
    check():void{
        if(this.myForm.valid)
        {
            this.myConfirm.confirm({
                title: '確定要更新密碼嗎?',
                icon: 'alert'
            }).then(
                result=>{
                    this.loading=true;
                    this.recaptchaV3Service.execute('importantAction')
                    .subscribe((token) => this.submit(token));
          
                },
                cancel=>{
                    return false;
                }
            )
            
        }     
    }

    public wrongPwd=false;
    submit(recaptcha_token:string):void{

        const url='/password';
        const param ={
            recaptcha_token:recaptcha_token,
            old_password:this.old_password!.value,
            password:this.password!.value,
        };

     
    }

    reset():void{
        this.wrongPwd=false;
    }

    
    get old_password() {
        return this.myForm.get('old_password');
    }

    get password() {
        return this.myForm.get('password');
    }
    get password_checked() {
        return this.myForm.get('password_checked');
    }

}
