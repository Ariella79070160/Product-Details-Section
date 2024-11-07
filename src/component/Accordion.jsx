import clsx from "clsx"
import { useState } from "react"
import { RiAddCircleLine, RiIndeterminateCircleLine } from 'react-icons/ri';

const Accordion = ({title, children}) => {
    const [isopen, setIsopen] = useState(false)
    const Icon = isopen ? RiIndeterminateCircleLine : RiAddCircleLine;

    return(
        <div className="flex gap-3 flex-col">
            <button 
                className={clsx(
                    'w-full',
                    'flex items-center justify-between gap-3',
                    'rounded',
                    'focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]',
                    'text-left text-lg font-medium text-neutral-900',
                )}
                onClick={()=>setIsopen(!isopen)}>
                <span className="font-medium text-lg text-neutral-900">
                    {title}
                </span>
                <Icon className="size-6 text-neutral-400" />
            </button>

            {isopen && (
                <div 
                    className={clsx(
                        'transition-max-height overflow-hidden duration-300',
                        'pr-12',
                        isopen && 'mt-2',
                    )}
                >
                    {children}
                </div>
            )}

        </div>
    )

}

export default Accordion