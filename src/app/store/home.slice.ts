export interface Basic_info {
	company_name: string;
	company_name_en: string;
	unified_business_no: string;
	company_website_url: string;
	company_address: string;
	company_profile: string;
}

export interface Contact_person {
	name: string;
	title: string;
	email: string;
	mobile_phone: string;
	office_phone: string;
}

export interface Confirmation_of_exhibitor_right {
	itemName: string;
	description: string;
	change_description?: string;
}

export interface Exhibition_Information_Update {
	speaker_photo: Blob;
	logo_image: Blob;
	speech_manuscript: Blob;
	briefing: Blob;
	highlights: { highlight: string; detail: string }[];
	exhibition_theme: string;
}

export type Review_Status = 'DRAFT' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED';

export interface Speaker_information {
	name: string;
	title: string;
	biography: string;
	updated_at: string;
}

export enum Steps {
	'BASIC_INFO' = 'basic_info',
	'CONTACT_PERSON' = 'contact_person',
	'EXHIBITOR_RIGHTS_CONFIRMATION' = 'exhibitor_rights_confirmation',
	'EXHIBITOR_INFORMATION_UPDATE' = 'exhibitor_information_update',
	'SPEAKER_INFO' = 'speaker_info',
	'FILE_DOWNLOAD' = 'file_download',
	'REVIEW_AND_CHECK_PREVIEW_LIST' = 'review_and_check_preview_list'
}

export enum Steps_URL {
	'BASIC_INFO' = 'basic-info',
	'CONTACT_PERSON' = 'contact-person',
	'EXHIBITOR_RIGHTS_CONFIRMATION' = 'exhibitor-rights-confirmation',
	'EXHIBITOR_INFORMATION_UPDATE' = 'exhibitor-information-update',
	'SPEAKER_INFO' = 'speaker-info',
	'FILE_DOWNLOAD' = 'file-download',
	'REVIEW_AND_CHECK_PREVIEW_LIST' = 'review-and-check-preview-list'
}

export enum Steps_Chinese {
	'BASIC_INFO' = '基本資料',
	'CONTACT_PERSON' = '聯絡人',
	'EXHIBITOR_RIGHTS_CONFIRMATION' = '參展商權益確認',
	'EXHIBITOR_INFORMATION_UPDATE' = '參展商資料更新',
	'SPEAKER_INFO' = '演講者資訊',
	'FILE_DOWNLOAD' = '文件下載',
	'REVIEW_AND_CHECK_PREVIEW_LIST' = '審核與檢視預覽清單'
}

export interface HomeSlice {
	countdown_to_submission_deadline: string;
	data_completeness: number;
	last_updated: string | null;
	review_status: Review_Status;
	company_unified_business_no: string | null;
	basic_info: Basic_info;
	contact_person: Contact_person;
	confirmation_of_exhibitor_rights: Confirmation_of_exhibitor_right[];
	selected_change_requests: string[];
	exhibition_Information_Update: Exhibition_Information_Update;
	speaker_information: Speaker_information[];
	proceed_to_next_step: boolean;
	proceed_to_next_step_url: string;
	proceed_to_next_step_message: string;
}

export const initialHomeSlice: HomeSlice = {
	countdown_to_submission_deadline: '',
	data_completeness: 0,
	last_updated: null,
	review_status: 'DRAFT',
	company_unified_business_no: null,
	basic_info: {
		company_name: '',
		company_name_en: '',
		unified_business_no: '',
		company_website_url: '',
		company_address: '',
		company_profile: ''
	},
	contact_person: {
		name: '',
		title: '',
		email: '',
		mobile_phone: '',
		office_phone: ''
	},
	confirmation_of_exhibitor_rights: [],
	selected_change_requests: [],
	exhibition_Information_Update: {
		speaker_photo: new Blob(),
		logo_image: new Blob(),
		speech_manuscript: new Blob(),
		briefing: new Blob(),
		highlights: [],
		exhibition_theme: ''
	},
	speaker_information: [],
	proceed_to_next_step: false,
	proceed_to_next_step_url: Steps_URL.CONTACT_PERSON,
	proceed_to_next_step_message: Steps_Chinese.CONTACT_PERSON
};