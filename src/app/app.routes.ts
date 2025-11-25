import { Routes } from '@angular/router';
import { Index } from './index';
import { loginGuard } from './index/login-guard';
import { Home } from './home/home';
import { Article } from './article/article';
import { Login } from './login/login';
import { Setting } from './setting/setting';
import { MemberInfo } from './setting/member-info/member-info';
import { Subscription } from './setting/subscription/subscription';
import { MyKeep } from './setting/my-keep/my-keep';
import { Policy } from './setting/policy/policy';
import { weblogGuard } from './guard/weblog-guard';
import { Register } from "./login/register/register";
import { SignIn } from "./login/sign-in/sign-in";
import { ForgotPassword } from "./login/forgot-password/forgot-password.component";
import { ResetPassword } from "./login/reset-password/reset-password";
import { commonGuard } from "./guard/common-guard";

export const routes: Routes = [
	{ path: 'login', canActivate: [commonGuard], component: Login },
	{ path: 'register', canActivate: [commonGuard], component: Register },
	{ path: 'sign-in', canActivate: [commonGuard], component: SignIn },
	{ path: 'forgot-password', canActivate: [commonGuard], component: ForgotPassword },
	{ path: 'reset-password', canActivate: [commonGuard], component: ResetPassword },
	{
		path: '', component: Index, canActivate: [loginGuard], children: [
			{ path: '', canActivate: [weblogGuard], component: Home },
			{ path: 'news/:id', canActivate: [weblogGuard], component: Article },
			{
				path: 'my', component: Setting, children: [
					{ path: '', redirectTo: '/my/info', pathMatch: 'full' },
					{ path: 'info', canActivate: [weblogGuard], component: MemberInfo },
					{ path: 'subscription', canActivate: [weblogGuard], component: Subscription },
					{ path: 'keep', canActivate: [weblogGuard], component: MyKeep },
					{ path: 'policy', canActivate: [weblogGuard], component: Policy },
				]
			}
		]
	},
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];

