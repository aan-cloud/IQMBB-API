import { z } from "zod";

export const sectionValidationSchema = z.object({
    id: z.string().min(4).includes("m"),
    name: z.string().min(4)
});