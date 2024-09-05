import clsx from 'clsx';
import React from 'react';

const LogIn: React.FC = () => {
	return (
		<>
			<div className={clsx('w-full', 'h-full', 'grid', 'justify-center')}>
				<h1 className={clsx('text-7xl', 'mt-[15%]', 'mx-auto')}>LOG IN</h1>

				<div
					className={clsx(
						'rounded-[25px]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]',
						'w-[650px]',
						'h-[75px]',
						'mx-auto',
						'mt-[50px]'
					)}
				></div>

				<input
					type="email"
					name="email"
					placeholder="Email"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[219px]',
						'border-black',
						'mx-auto',
						'w-[600px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
					)}
				></input>

				<div
					className={clsx(
						'rounded-[25px]',
						'border-[3px]',
						'border-solid',
						'border-[#000000]',
						'w-[650px]',
						'h-[75px]',
						'mx-auto',
						'mt-[50px]'
					)}
				></div>

				<input
					type="password"
					name="password"
					placeholder="Password"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[344px]',
						'border-black',
						'mx-auto',
						'w-[600px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
					)}
				></input>

				<button
					className={clsx(
						'w-[300px]',
						'h-[75px]',
						'bg-[#000000]',
						'justify-self-center',
						'mt-[50px]',
						'rounded-[25px]',
						'text-white',
						'text-4xl'
					)}
				>
					ENTER
				</button>

				<p
					className={clsx(
						'w-auto',
						'justify-self-center',
						'mt-[20px]',
						'text-[#807e7e]',
						'text-2xl'
					)}
				>
					don't have an account?
				</p>

				<button
					className={clsx(
						'w-[300px]',
						'h-[75px]',
						'justify-self-center',
						'mt-[0px]',
						'rounded-[25px]',
						'text-[#807e7e]',
						'text-4xl',
						'border-[3px]',
						'border-solid',
						'border-[#807e7e]'
					)}
				>
					REGISTER
				</button>
			</div>
		</>
	);
};

export default LogIn;
