import { useRouter } from 'next/router';
import { parseNum } from '@/utils';

export default function TokenCard({ token }: any) {
	const router = useRouter();

	return (
		<>
			<div
				onClick={() => router.push(`/tokens/${token.id}`)}
				className='flex items-center mx-24 text-center justify-center border-b border-blue-400/75 hover:bg-blue-200'>
				{/* Image */}
				<div>
					<img src={token.image} alt='logo' className='h-12' />
				</div>

				{/* Name + Symbol */}
				<div className='text-center items-center justify-center w-[30%] font-semibold'>
					{token?.name} - {token?.symbol.toUpperCase()}
				</div>

				{/* Current Price */}
				<div className='w-[30%]'>
					<span className='font-semibold'>Current Price:</span> $
					{parseNum(token.current_price)}
				</div>

				{/* High + Low + % change */}
				<div className='flex-col w-3/12'>
					<span className='font-semibold'>High (24h):</span> $
					{parseNum(token?.high_24h)}
					<br />
					<span className='font-semibold'>Low (24h):</span> $
					{parseNum(token?.low_24h)}
					<br />
					{token?.price_change_percentage_24h > 0 ? (
						<span className='text-green-400 font-bold'>
							{token?.price_change_percentage_24h.toFixed(2)}%
						</span>
					) : (
						<span className='text-red-500 font-bold'>
							{token?.price_change_percentage_24h.toFixed(2)}%
						</span>
					)}
				</div>
			</div>
		</>
	);
}
