import Container from '@/Providers/Container'
import { FC } from 'react'

import Filters from '../Filters/allFilters'
import { TableDemo } from '../TableCalls/Table'

const Main: FC = () => {
	return (
		<main className='w-[1440px] mx-auto'>
			<Container>
				<div className='flex flex-col'>
					<div className='pt-8'>
						<Filters />
					</div>
					<div className=''>
						<TableDemo />
					</div>
				</div>
			</Container>
		</main>
	)
}

export default Main
