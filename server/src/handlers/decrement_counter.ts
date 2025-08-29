import { type CounterStepInput, type Counter } from '../schema';
import { getCurrentCounterValue, setCounterValue } from './get_counter';

export async function decrementCounter(input: CounterStepInput): Promise<Counter> {
    // This handler decrements the counter value by the specified step (default 1)
    // The decrement operation subtracts the step value from the current counter
    const currentValue = getCurrentCounterValue();
    const newValue = currentValue - input.step;
    setCounterValue(newValue);
    
    return {
        value: newValue,
        timestamp: new Date()
    };
}