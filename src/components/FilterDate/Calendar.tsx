'use client'

import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'

import { Popover } from '@/components/ui/popover'

export function DatePickerWithPresets() {
	return (
		<Popover>
			<div className='flex items-center'>
				<ChevronLeft className='text-[#ADBFDF] hover:text-[#005FF8]' />
				<div className='flex items-center text-[#ADBFDF] hover:text-[#005FF8]'>
					<CalendarIcon className='mr-2 h-4 w-4' />
					<span>3 дня</span>
				</div>
				<ChevronRight className='text-[#ADBFDF] hover:text-[#005FF8]' />
			</div>
		</Popover>
	)
}
