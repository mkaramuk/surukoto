import { KanbanBoard } from "@/components/UI";
import { useViewModel } from "./viewmodel";
import { Icon } from "@iconify/react/dist/iconify.js";

export function HomePage() {
	const viewModel = useViewModel();

	return (
		<div className="w-screen h-screen bg-black flex gap-2 p-10 overflow-x-auto">
			<KanbanBoard
				lists={viewModel.lists}
				onChange={viewModel.onBoardChanged}
			/>
			<div className="flex flex-col w-[350px] items-center bg-blue-300 p-4 rounded-lg h-fit gap-3 transition-all duration-500">
				{viewModel.addListMenuVisible && (
					<input
						ref={viewModel.newListTitleInputRef}
						className={`bg-gray-100 border-2 border-gray-300 w-full h-[50px] rounded-lg p-2`}
						value={viewModel.newListTitle}
						onChange={viewModel.onNewListTitleChange}
						onKeyDown={viewModel.onNewCardTitleInputKeyDown}
						placeholder="Enter title of the new list"
					/>
				)}
				<div className="w-full flex justify-between items-center gap-2">
					<button
						onClick={
							viewModel.addListMenuVisible
								? viewModel.addNewList
								: viewModel.showAddListMenu
						}
						className="transition-all duration-500 h-[50px] text-xl text-white bg-blue-600 rounded-lg p-2  hover:cursor-pointer hover:bg-blue-500 w-full"
					>
						Add another list
					</button>
					{viewModel.addListMenuVisible && (
						<button
							onClick={viewModel.hideAddListMenu}
							className="transition-all duration-500 w-fit h-fit text-xl text-gray-700 rounded-full p-2 hover:cursor-pointer hover:text-gray-500"
						>
							<Icon fontSize="24px" icon="mdi:cancel-bold" />
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
