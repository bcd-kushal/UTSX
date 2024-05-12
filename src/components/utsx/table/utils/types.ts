export type TriggeredActionType = "function" | "none" | "component" | "modalButton"
export type TableLabelType = "svg" | "image" | "text"

export type Position = {
    [key: string]: string
}

export type ItemActionType = {
    action: any
    type: TriggeredActionType
    modalType?: ModalType
}

export type TableDataRowType = {
    label: {
        label: string | JSX.Element
        type: TableLabelType
    }
    action: ItemActionType
}[]

export type tableDataType = {
    header: { label: string, span: number }[]
    data: TableDataRowType[]
}

export type ModalType = "destructive" | "normal"

export type TableModalWrapperType = {
    label: string | JSX.Element
    type: "link" | "action" | "none"
    onClickTrigger: () => void
    modalTitle: string
    href?: string
    modalType?: ModalType
    className?: string
}

type CellStylesType = {
    background?: string
    text?: string
}

export type tableClassNameType = {
    header?: string
    row?: string
    alternateRow?: string
    table?: string
}