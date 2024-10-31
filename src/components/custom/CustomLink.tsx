import {Link} from "react-router-dom";
import {FC, SVGProps} from "react";
import cn from 'classnames'

export type ItemType = {
    svg: FC<SVGProps<SVGSVGElement>>
    name: string
    path: string
    subItems?: {
        svg: FC<SVGProps<SVGSVGElement>>
        name: string
        path: string
    }[]
}

type Props = {
    isCollapsed?: boolean
    item: ItemType
    id?: number
    currentItem?: number | null
    setCurrentItem?: (id: number) => void
    setCurrentSubItem?: (id: number) => void
    currentSubItem?: number | null
    subId?: number
    subLinkClassName?: boolean
}

export const CustomLink = ({
                               currentItem,
                               setCurrentItem,
                               id,
                               item,
                               isCollapsed,
                               currentSubItem,
                               setCurrentSubItem,
                               subId,
                               subLinkClassName,
                           }: Props) => {

    const currentLinkHandler = () => {
        if (currentItem !== id && setCurrentItem !== undefined && id !== undefined) {
            setCurrentItem(id)
        }

        if (currentSubItem !== subId && setCurrentSubItem !== undefined && subId !== undefined) {
            setCurrentSubItem(subId)
        }
    }
    const isActiveLink =
        (id !== undefined && currentItem === id) || (subId !== undefined && currentSubItem === subId)

    return (
        <Link onClick={currentLinkHandler}
              className={cn(
                  "flex items-center w-[100%] h-10 rounded-lg text-black cursor-pointer text-lg transition-all",
                  "hover:bg-gray-300 active:bg-blue-300 focus-visible:bg-gray-300 focus-visible:outline-none",
                  isCollapsed ? "justify-center w-[80%]" : "justify-start pl-2",
                  isActiveLink && "bg-indigo-200 text-blue-600",
                  subLinkClassName && "flex items-start w-[100%] whitespace-nowrap h-8",
              )}
              to={item.path}
        >
            <item.svg className={cn("mr-4", isCollapsed && "ml-3.5")}/>
            {!isCollapsed && item.name}
        </Link>
    )
}

