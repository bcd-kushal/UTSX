'use client'
import Toggle from "@/components/utsx/toggle/Toggle"
import { useState } from "react"

export default function Home() {
	const [toggled, setToggled] = useState<boolean>(false)

	return (
		<Toggle value={toggled} setValue={setToggled} activeColor="bg-red-400" activeBGColor="bg-red-300/40" />
	)
}
