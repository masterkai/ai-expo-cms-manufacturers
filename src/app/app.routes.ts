import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from "./login/register/register";
import { SignIn } from "./login/sign-in/sign-in";
import { ForgotPassword } from "./login/forgot-password/forgot-password.component";
import { ResetPassword } from "./login/reset-password/reset-password";
import { commonGuard } from "./guard/common-guard";
import { BasicInformation } from "./home/basic-information/basic-information";
import { ContactPerson } from "./home/contact-person/contact-person";
import { ExhibitorRightsConfirmation } from "./home/exhibitor-rights-confirmation/exhibitor-rights-confirmation";
import { ExhibitorInformationUpdate } from "./home/exhibitor-information-update/exhibitor-information-update";
import { FileDownload } from "./home/file-download/file-download";
import { ReviewAndCheckPreviewList } from "./home/review-and-check-preview-list/review-and-check-preview-list";
import { SpeakerInfo } from "./home/speaker-info/speaker-info";
import { loginGuard } from "./guard/login-guard";
import { HomeStore } from "./store/home.store";

export const routes: Routes = [
	{ path: 'login', canActivate: [commonGuard], component: Login },
	{ path: 'register', canActivate: [commonGuard], component: Register },
	{ path: 'sign-in', canActivate: [commonGuard], component: SignIn },
	{ path: 'forgot-password', canActivate: [commonGuard], component: ForgotPassword },
	{ path: 'reset-password', canActivate: [commonGuard], component: ResetPassword },
	{
		path: '',
		providers: [HomeStore],
		canActivate: [loginGuard],
		component: Home,
		children: [
			{ path: '', redirectTo: 'basic-info', pathMatch: 'full' },
			{ path: 'basic-info', component: BasicInformation },
			{
				path: 'contact-person',
				component: ContactPerson
			}, {
				path: 'exhibitor-rights-confirmation',
				component: ExhibitorRightsConfirmation
			},
			{
				path: 'exhibitor-information-update',
				component: ExhibitorInformationUpdate
			},
			{
				path: 'speaker-info',
				component: SpeakerInfo
			},
			{
				path: 'file-download',
				component: FileDownload
			}, {
				path: 'review-and-check-preview-list',
				component: ReviewAndCheckPreviewList
			},
		]
	},
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

