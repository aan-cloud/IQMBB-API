import { z } from "zod";

export const tubeValidationSchema = z.object({
    id: z.string().min(4).includes("bz"),
    part: z.string().min(4),
    size: z.number().min(2)
});