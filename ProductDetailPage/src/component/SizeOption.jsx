import clsx from "clsx"
import { SIZE_MAP } from "../constant"
const SizeOption = ({ outofStock, onClick, selectedSize,size}) => {

    return (
        <label
            key={size}
            aria-label={size}>
            <input
                type="radio"
                name="size-choice"
                value={size}
                disabled={outofStock}
                aria-checked={selectedSize === size}
                onChange={onClick}
            />
            <span
                aria-hidden="true"
                tabIndex={selectedSize === size || outofStock ? -1 : 0}
                className={clsx(
                  'h-12 w-16',
                  'flex items-center justify-center gap-1.5',
                  'px-5 py-3',
                  'font-medium uppercase',
                  'rounded border',
                  'focus:outline-none',
                  outofStock
                    ? [
                        'text-neutral-400',
                        'pointer-events-none',
                        'bg-neutral-100',
                      ]
                    : [
                        'text-neutral-900',
                        'cursor-pointer',
                        'bg-white hover:bg-neutral-50 focus:bg-neutral-50',
                      ],
                  selectedSize === size
                    ? 'border-indigo-600'
                    : 'border-neutral-200',
                  outofStock && selectedSize !== size && 'border-none',
                )}>
                 {SIZE_MAP[size]}
              </span>
        </label>
    )
}

export default SizeOption
