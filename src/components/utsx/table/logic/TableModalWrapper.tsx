"use client"
import { useState } from "react"
import Modal from "./Modal"
import Link from "next/link"
import { TableModalWrapperType } from "../utils/types"


export function TableModalWrapperButton({ label, type, onClickTrigger, modalTitle, href, modalType, className }: TableModalWrapperType) {
	const [showModal, setShowModal] = useState<boolean>(false)
	const handleModal = () => {
		onClickTrigger()
		setShowModal(false)
	}

	return (
		<>
			{/* SHOW MODAL ================================================== */}
			{showModal ? (<Modal title={`${modalTitle}`} onCancel={() => setShowModal(false)} onAction={handleModal} triggerType={modalType || "normal"} /> ) : (<></>)}
			{type === "link" ? 	( <Link href={href ? href : "#"} className={className}> {label} </Link> ) : 
								( <button onClick={() => setShowModal(true)} className={className}> {label} </button> )
			}
		</>
	)
}
