import SearchBar from "@/components/utsx/searchBar/SearchBar"
import { SearchBarProps } from "@/components/utsx/searchBar/utils/types"

export default function Home() {
	const searchProps: SearchBarProps = {
		placeholder: " "
	}

	return (
		<div className="w-screen px-20 py-5"> 
			<SearchBar props={searchProps} />
		</div>
	)
}
