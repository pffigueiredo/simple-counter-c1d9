import { type CounterStepInput, type Counter } from '../schema';
import { getCurrentCounterValue, setCounterValue } from './get_counter';

export async function incrementCounter(input: CounterStepInput): Promise<Counter> {
    // This handler increments the counter value by the specified step (default 1)
    // The increment operation adds the step value to the current counter
    const currentValue = getCurrentCounterValue();
    const newValue = currentValue + input.step;
    setCounterValue(newValue);
    
    return {
        value: newValue,
        timestamp: new Date()
    };
}