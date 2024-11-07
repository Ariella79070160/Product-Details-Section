import clsx from 'clsx';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';

const ChangeQuantity = ({quantity,increment, decrement,availableStock}) => {
    const disabledDecrement = quantity === 1;
    const disabledIncrement = quantity >= availableStock;

    return(
        <div
            className={clsx(
                'h-9 w-[125px]',
                'flex items-center justify-center gap-3',
                'px-[5px] py-0.5',
                'rounded-md border border-neutral-200 bg-neutral-50',
            )}>
            <button
                className={clsx(
                    'flex items-center justify-center rounded',
                    'text-neutral-600 disabled:text-neutral-400',
                    'cursor-pointer disabled:pointer-events-none',
                )}
                disabled={disabledDecrement}
                onClick={decrement}>
                    <RiSubtractFill className="size-5 shrink-0 p-0.5" />
            </button>
            <span
                className="flex-1 text-center text-sm font-medium text-neutral-600">
                {quantity}
            </span>
            <button 
                className={clsx(
                    'flex items-center justify-center rounded',
                    'text-neutral-600 disabled:text-neutral-400',
                    'cursor-pointer disabled:pointer-events-none',
                )}
                disabled={disabledIncrement}
                onClick={increment}>
                    <RiAddFill className="size-5 shrink-0 p-0.5" />
            </button>
        </div>
    )
}

export default ChangeQuantity