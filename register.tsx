import clsx from "clsx";
import { Link } from "react-router-dom";

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
					value={email}
					placeholder="Email"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[154px]',
						'border-black',
						'mx-auto',
						'w-[600px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
					)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						handleEmailChange(e);
					}}
				></input>

				{emailError && (
					<p className={clsx('absolute', 'ml-[30%]', 'mt-[15%]', 'text-[#FF0000]')}>
						{emailError}
					</p>
				)}

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
						'mt-[279px]',
						'border-black',
						'mx-auto',
						'w-[600px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
					)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						handlePasswordChange(e);
					}}
				></input>

				{passwordError && (
					<p className={clsx('absolute', 'ml-[30%]', 'mt-[23%]', 'text-[#FF0000]')}>
						{passwordError}
					</p>
				)}

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
					type="text"
					name="nickname"
					placeholder="Nickname"
					className={clsx(
						'absolute',
						'text-3xl',
						'mt-[405px]',
						'border-black',
						'mx-auto',
						'w-[600px]',
						'h-[75px]',
						'justify-self-center',
						'bg-transparent',
						'border-none'
					)}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						handleNicknameChange(e);
					}}
				></input>

				{nicknameError && (
					<p className={clsx('absolute', 'ml-[30%]', 'mt-[31%]', 'text-[#FF0000]')}>
						{nicknameError}
					</p>
				)}

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
					onClick={handleEnterClick}
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
					already have an account?
				</p>

				<Link to="/login" className={clsx('justify-self-center')}>
					<button
						className={clsx(
							'w-[300px]',
							'h-[75px]',
							'justify-self-center',
							'mt-[20px]',
							'rounded-[25px]',
							'text-[#807e7e]',
							'text-4xl',
							'border-[3px]',
							'border-solid',
							'border-[#807e7e]'
						)}
					>
						LOG IN
					</button>
				</Link>