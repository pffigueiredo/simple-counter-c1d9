import { z } from 'zod';

// Counter response schema
export const counterSchema = z.object({
  value: z.number().int(),
  timestamp: z.coerce.date()
});

export type Counter = z.infer<typeof counterSchema>;

// Input schema for increment/decrement with optional step
export const counterStepInputSchema = z.object({
  step: z.number().int().positive().optional().default(1)
});

export type CounterStepInput = z.infer<typeof counterStepInputSchema>;