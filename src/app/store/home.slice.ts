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

export interface Speaker_information {
	name: string;
	title: string;
	biography: string;
	updated_at: string;
}

export interface HomeSlice {
	data_completeness: number;
	last_updated: string | null;
	review_status: 'DRAFT' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED';
	company_unified_business_no: string | null;
	basic_info: Basic_info;
	contact_person: Contact_person;
	confirmation_of_exhibitor_rights: Confirmation_of_exhibitor_right[];
	selected_change_requests: string[];
	exhibition_Information_Update: Exhibition_Information_Update;
	speaker_information: Speaker_information[];


}