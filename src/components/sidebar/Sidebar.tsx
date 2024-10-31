import {CustomLink, ItemType} from "../custom/CustomLink.tsx";
import {useState} from "react";
import {ArrowLeft} from "../../icons/ArrowLeft.tsx";
import {ArrowRight} from "../../icons/ArrowRight.tsx";
import {items} from "./state.ts";
import cn from 'classnames';

export const Sidebar = () => {
    const [currentItem, setCurrentItem] = useState<number | null>(null)
    const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(false)
    const [itemName, setItemName] = useState<number | null>(null)
    const [openItemIndex, setOpenItemIndex] = useState<number | null>(null)
    const [currentSubItem, setCurrentSubItem] = useState<number | null>(null)

    const sideBarItems: ItemType[] = items

    const viewSideBar = () => {
        setIsCollapsedSidebar(!isCollapsedSidebar)
    }

    const toggleItemCollapse = (index: number) => {
        setOpenItemIndex((prevIndex) => (prevIndex === index ? null : index))
        setCurrentItem(index)
        setCurrentSubItem(null)
    }


    return (
        <aside
            className={cn(
                "flex flex-col items-center gap-2.5 border border-gray-300 bg-gray-200 transition-all duration-200 text-center relative h-[80vh]",
                isCollapsedSidebar ? "w-16" : "w-48",
            )}
        >
            <div className="text-indigo-500 text-xl my-4">
                {isCollapsedSidebar ? <span>S</span> : <span>Sidebar</span>}
            </div>
            {sideBarItems.map((item, index) => (
                <div
                    onMouseEnter={() => setItemName(index)}
                    onMouseLeave={() => setItemName(null)}
                    key={index}
                    className="relative flex flex-col items-center w-[90%]"
                    onClick={() => toggleItemCollapse(index)}
                >
                    <CustomLink
                        isCollapsed={isCollapsedSidebar}
                        currentItem={currentItem}
                        setCurrentItem={setCurrentItem}
                        id={index}
                        item={item}
                    />
                    {isCollapsedSidebar && itemName === index && (
                        <div className={cn(
                            "absolute left-full bg-indigo-500 pl-3 pr-2 py-1 rounded text-white text-sm whitespace-nowrap transform -translate-y-1/2 ml-1 mt-5",
                            "clip-tooltip"
                        )}>
                            {item.name}
                        </div>
                    )}

                    {openItemIndex === index && item.subItems && item.subItems.length > 0 && (
                        <div
                            className={cn(
                                "flex flex-col gap-2 mt-2 items-start",
                                isCollapsedSidebar &&
                                "absolute left-full bg-gray-200 border border-gray-300 rounded mt-0 ml-1",
                            )}
                        >
                            {item.subItems.map((subItem, subIndex) => (
                                <div
                                    key={subIndex}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setCurrentSubItem(subIndex)
                                    }}
                                >
                                    <CustomLink
                                        setCurrentSubItem={setCurrentSubItem}
                                        item={subItem}
                                        currentSubItem={currentSubItem}
                                        subId={subIndex}
                                        subLinkClassName
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div className="mt-auto mb-12 w-min mx-auto">
                <button onClick={viewSideBar}
                        className="w-full bg-transparent border-none cursor-pointer flex justify-center items-center">
                    {isCollapsedSidebar ? <ArrowRight/> : <ArrowLeft/>}
                </button>
            </div>
        </aside>
    )
}

