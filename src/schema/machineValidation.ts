import { z } from "zod";

export const machineValidationSchema = z.object({
    id: z.string().min(4).includes("m"),
    model: z.string().min(4)
});