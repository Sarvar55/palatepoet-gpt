type EnMessages = typeof import("@/messages/en.json");
type AzMessages = typeof import("@/messages/az.json");
type TrMessages = typeof import("@/messages/tr.json");

declare interface IntlMessages extends EnMessages, AzMessages, TrMessages {}
