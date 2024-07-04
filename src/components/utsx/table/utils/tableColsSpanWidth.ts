import { SLNO_COL_WIDTH } from "../constants/defaults"
import { tableDataType } from "./types"

export const tableColsWidthRatio = (arr:tableDataType['header']) => `${SLNO_COL_WIDTH} ` + arr.reduce((acc, el) => { return acc + `${el.span}fr ` }, "")
