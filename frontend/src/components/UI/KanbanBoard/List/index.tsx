import {
	SortableContext,
	verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Icon } from "@iconify/react";
import { Item } from "./Item";
import { useViewModel } from "./viewmodel";

export function List(props: ListProps) {
	const viewModel = useViewModel(props);

	return (
		<SortableContext
			id={props.id}
			items={props.list.items}
			strategy={verticalListSortingStrategy}
		>
			<div className="bg-gray-100 border-2 border-gray-300 w-[350px] h-fit flex flex-col rounded-lg overflow-hidden">
				{viewModel.isEditingTitle ? (
					<input
						ref={viewModel.titleEditInputRef}
						onKeyDown={viewModel.onEditTitleEnd}
						value={viewModel.title}
						onChange={viewModel.onTitleChange}
						onBlur={viewModel.onTitleEditBlur}
						className="mx-4 my-2 p-1 text-xl font-bold border-2 rounded-lg transition-all duration-500 outline-none focus:border-2 focus:border-blue-400"
					/>
				) : (
					<div
						onDoubleClick={viewModel.onEditTitle}
						className="mx-4 my-2 text-2xl font-bold hover:cursor-pointer"
					>
						{props.list.title}
					</div>
				)}

				<hr className="w-[90%] self-center" />
				<ul
					ref={viewModel.setNodeRef}
					className="flex flex-col gap-3 p-5 overflow-y-auto "
				>
					{props.list.items.map((item, index) => (
						<Item key={index} id={item.id}>
							{item.content}
						</Item>
					))}
					{viewModel.addCardFieldVisible ? (
						<li>
							<input
								onKeyDown={viewModel.addNewCard}
								value={viewModel.newCardTitle}
								onChange={viewModel.onNewCardTitleChange}
								placeholder="Enter a title to your card"
								ref={viewModel.addCardInputRef}
								onBlur={viewModel.hideAddItemField}
								className="w-full p-3"
							/>
						</li>
					) : null}
					<li
						onClick={viewModel.showAddItemField}
						className="flex items-center gap-3 w-full rounded-md p-3 hover:cursor-pointer hover:bg-gray-200"
					>
						<Icon
							className="transition-all duration-500"
							fontSize="25px"
							icon="material-symbols:add"
						/>
						Add new card
					</li>
				</ul>
			</div>
		</SortableContext>
	);
}

List.Item = Item;
