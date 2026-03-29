// TODO translating messages
// TODO notify in setting tab and bottom panel that new beta version is ready for installing
// TODO add messagesLeftCnt displaying in status bar
// TODO NEXT: sending notes from Obsidian to Telegram
// TODO MED:  "delete messages from Telegram" settings for each distribution rules
// TODO NEXT: save files if no template file
// TODO NEXT: check reconnecting
// TODO NEXT: bur in reconnecting on MacBook https://t.me/sm1rnov_id
import { compareVersions } from "compare-versions";
export const releaseVersion = "4.0.0";
export const showNewFeatures = true;
export let showBreakingChanges = true;

const newFeatures = `In this release, security has been enhanced by encrypting the bot token`;
export const breakingChanges = `⚠️ <b><i>Breaking changes!\n\nBot token may need to be re-entered.</i></b> ⚠️`;
export const telegramChannelLink = "https://t.me/obsidian_telegram_sync";
export const insiderFeaturesLink =
	"https://github.com/sheben404/obsidian-telegram-sync/blob/main/docs/Telegram%20Sync%20Insider%20Features.md";
const repoLink = `<a href='https://github.com/sheben404/obsidian-telegram-sync'>GitHub</a>`;
const introduction = `This is a community-maintained fork. Check ${repoLink} for updates and issue reports.`;
const bestRegards = "Best regards,\nTelegram Sync (Fork)\n⌞";

export const privacyPolicyLink = "https://github.com/sheben404/obsidian-telegram-sync/blob/main/PRIVACY-POLICY.md";

export const notes = `
<u><b>Telegram Sync ${releaseVersion}</b></u>\n
🆕 ${newFeatures}\n
💡 ${introduction}\n
${bestRegards}`;

export function showBreakingChangesInReleaseNotes() {
	showBreakingChanges = true;
}

export function versionALessThanVersionB(versionA, versionB) {
	if (!versionA || !versionB) return undefined;
	return compareVersions(versionA, versionB) == -1;
}

const check = process.argv[2] === "check";

if (check) {
	const packageVersion = process.env.npm_package_version;

	if (packageVersion !== releaseVersion) {
		console.error(`Failed! Release notes are outdated! ${packageVersion} !== ${releaseVersion}`);
		process.exit(1);
	}
}
