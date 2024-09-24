import { By } from "@serenity-js/web";

export const byType = (typeName: string) =>
    By.css(`[nput type="${ typeName }"]`)


