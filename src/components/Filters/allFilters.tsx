import { FC } from 'react'

import { DatePickerWithPresets } from '../FilterDate/Calendar'
import AllFilters from './Filters'

const Filters: FC = () => {
	return (
		<div className='flex items-center justify-between'>
			<AllFilters />
			<div className='flex justify-end gap-12 items-center '>
				<DatePickerWithPresets />
			</div>
		</div>
	)
}

export default Filters
