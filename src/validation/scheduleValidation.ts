import { z } from "zod";

export const scheduleValidationSchema = z.object({
  id: z.number(),
  operator: z.string().min(4).includes("IQM"),
  section: z.string().min(4),
  machine: z.string().min(3),
  tube: z.string().min(4),
  start: z.date(),
  end: z.date(),
});
