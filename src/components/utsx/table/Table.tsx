'use client'
import { capitalize } from "./utils/capitalize"
import { tableDataType, ItemActionType, tableClassNameType } from "./utils/types"
import { TableModalWrapperButton } from "./logic/TableModalWrapper"
import { tableColsWidthRatio } from "./utils/tableColsSpanWidth"
import config from "./utils/config.module.css"

export default function Table({ data, classNames }: { data: tableDataType, classNames?:tableClassNameType }) {
    // const totalCols: number = data.header.length + 1
    const gridTemplateColsRatio: string = tableColsWidthRatio(data.header)

    const handleItemAction = (obj: ItemActionType) => {
        const actionType = obj.type
        switch (actionType) {
            case "none":
                return () => { }
            case "function":
                return obj.action()
        }
    }

    return (
        <section className={`w-full relative flex items-start justify-start h-full overflow-y-scroll rounded-lg min-h-[200px] ${config.scrollbarHide} ${classNames?.table}`}>
            <div className={`grid grid-cols-1 min-w-full relative h-fit even:*:bg-transparent even:*:bg-[#121212] ${classNames?.alternateRow}`} >
                {/* header ------------------------- */}
                <div className={`bg-black text-white sticky top-0 rounded-lg py-3 px-3 grid mb-1 gap-2 ${classNames?.header}`} style={{ gridTemplateColumns: gridTemplateColsRatio }} >
                    <span className="pl-[5px]">Sl.</span>
                    {data.header.map((head, index) => (
                        <span key={index} className={ index === 0 ? "" : "text-center" } > {capitalize(head.label)} </span>
                    ))}
                </div>

                {/* table data ------------------------- */}
                {data.data.map((row, index) => (
                    <div className={`group rounded-lg py-2 px-3 gap-2 grid hover:bg-[#0075FE] hover:text-white bg-[#12121209] text-[#121212] transition-all duration-300 hover:shadow-lg hover:shadow-[#0075FE30] cursor-pointer ${classNames?.row}`} style={{ gridTemplateColumns: gridTemplateColsRatio }} key={index} >
                        <span className="pl-[5px] flex items-center"> {index + 1} </span>
                        {row.map((item, index2) =>
                            item.action.type === "modalButton" ? (<TableModalWrapperButton key={index2} label={item.label.label} modalTitle="Confirm action" onClickTrigger={ item.action.action } type="action" modalType={ item.action.modalType ? item.action.modalType : "normal" } className={ index2 === 0 ? "" : "w-full flex items-center justify-center" } />) : 
                            item.action.type === "component"   ? (<span className="w-full h-full flex items-center justify-center" key={ String(index2)+String(index) } > {item.label.label} </span>) : 
                                                                 (<span onClick={() => handleItemAction(item.action) } key={ String(index2)+String(index) } className={ index2 === 0 ? "" : "flex items-center justify-center" } > {item.label.label} </span>)
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
