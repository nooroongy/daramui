import Select, { useSelect } from "../components/ui/Select";
import LayoutList from "../layout/LayoutList";

const SelectPage = ()=>{
    const select01 = useSelect([
        {text:'text1',value:'1'},
        {text:'text2',value:'2'},
        {text:'text3',value:'3'},
        {text:'text4',value:'4'},
    ])

    const lists = [
        {
            title: 'preview', contents: (<>
                <Select link={select01}/>
            </>)
        }, {
            title: 'properties', contents: (<>
                properties
            </>)
        }, {
            title: 'api', contents: (<>
                api
            </>)
        }, {
            title: 'event', contents: (<>
                event
            </>)
        },
    ]

    return (
        <LayoutList
            lists={lists}
        />
    )
}

export default SelectPage;