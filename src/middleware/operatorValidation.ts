import { z } from "zod";

export const operatorValidationSchema = z.object({
    id: z.string().min(4).includes("IQM"),
    name: z.string().min(4),
    addres: z.string().min(5),
    healty: z.boolean({invalid_type_error: "Please insert true or false"})
});