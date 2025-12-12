export function getCountdown(targetDateStr: string) {
	const targetDate = new Date(targetDateStr);
	const now = new Date();

	const diffMs = targetDate.getTime() - now.getTime();
	if (diffMs <= 0) {
		return "時間已到";
	}

	const minutes = Math.floor(diffMs / 1000 / 60);
	const days = Math.floor(minutes / 1440); // 1440 = 24*60
	const hours = Math.floor((minutes % 1440) / 60);
	const mins = minutes % 60;

	return `${days} 天 ${hours} 小時 ${mins} 分鐘`;
}
