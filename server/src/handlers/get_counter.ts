import { type Counter } from '../schema';

// In-memory counter state
let counterValue = 0;

export async function getCounter(): Promise<Counter> {
    // This handler returns the current counter value
    // Counter state is maintained in memory and starts at 0
    return {
        value: counterValue,
        timestamp: new Date()
    };
}

// Helper function to get current counter value for other handlers
export function getCurrentCounterValue(): number {
    return counterValue;
}

// Helper function to set counter value for other handlers
export function setCounterValue(value: number): void {
    counterValue = value;
}