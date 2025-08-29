import { type Counter } from '../schema';
import { setCounterValue } from './get_counter';

export async function resetCounter(): Promise<Counter> {
    // This handler resets the counter value back to 0
    // After reset, the counter returns to its initial state
    setCounterValue(0);
    
    return {
        value: 0,
        timestamp: new Date()
    };
}