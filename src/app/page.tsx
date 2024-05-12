import SearchBar from "@/components/utsx/searchBar/SearchBar"
import { SearchBarProps, SearchTagsType } from "@/components/utsx/searchBar/utils/types"
import { Link2Icon, ReaderIcon, CardStackPlusIcon, ArrowTopRightIcon, ImageIcon, ResumeIcon } from "@radix-ui/react-icons"

export default function Home() {
	const searchProps: SearchBarProps = {
		placeholder: " "
	}

	const tags: SearchTagsType = [
        { label:"Has attachment", link:"#", svg:<Link2Icon height={12} width={12}/> },
        { label:"Has files", link:"#", svg:<ReaderIcon height={12} width={12}/> },
        { label:"Has folders", link:"#", svg:<CardStackPlusIcon height={12} width={12}/> },
        { label:"Has links", link:"#", svg:<ArrowTopRightIcon height={12} width={12}/> },
        { label:"Pictures", link:"#", svg:<ImageIcon height={12} width={12}/> },
        { label:"Videos", link:"#", svg:<ResumeIcon height={12} width={12}/> },
    ]


	return (
		<div className="w-screen px-20 py-5"> 
			<SearchBar props={searchProps} searchTags={tags} />
		</div>
	)
}
