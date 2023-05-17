import { ReactNode } from "react";
import { DndContext, DragOverlay, closestCenter } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
	SortableContext,
	horizontalListSortingStrategy,
	useSortable,
} from "@dnd-kit/sortable";
import { useViewModel } from "./viewmodel";
import { List } from "./List";

interface DraggableListProps {
	children?: ReactNode;
	id: string;
}

function DraggableList(props: DraggableListProps) {
	const {
		setNodeRef,
		attributes,
		listeners,
		transform,
		transition,
		isDragging,
	} = useSortable({ id: props.id });

	return (
		<div
			{...attributes}
			{...listeners}
			ref={setNodeRef}
			className="h-fit"
			style={{
				opacity: isDragging ? 0.4 : undefined,
				transform: CSS.Translate.toString(transform),
				transition,
			}}
		>
			{props.children}
		</div>
	);
}

export function KanbanBoard(props: KanbanBoardProps) {
	const viewModel = useViewModel(props);

	return (
		<DndContext
			collisionDetection={closestCenter}
			sensors={viewModel.sensors}
			onDragStart={viewModel.onDragStart}
			onDragCancel={viewModel.onDragCancel}
			onDragOver={viewModel.onDragOver}
			onDragEnd={viewModel.onDragEnd}
		>
			<SortableContext
				id="kanban"
				items={viewModel.getLists()}
				strategy={horizontalListSortingStrategy}
			>
				{viewModel.getLists().map((list, index) => (
					<DraggableList id={list.id} key={index}>
						<List
							onTitleChanged={(newTitle) =>
								viewModel.setListTitle(list.id, newTitle)
							}
							onNewCardAdded={(title) =>
								viewModel.addNewCard(list.id, title)
							}
							list={list}
							id={list.id}
						/>
					</DraggableList>
				))}
			</SortableContext>
			<DragOverlay>
				{viewModel.draggedItem ? (
					<div className="rotate-3 border-2 border-gray-300 bg-white shadow-lg p-2 rounded-lg">
						{viewModel.draggedItem.content}
					</div>
				) : null}
				{viewModel.draggedList ? (
					<div className="bg-gray-100 rotate-3 border-2 border-gray-300 w-[350px] h-fit flex flex-col shadow-lg rounded-lg overflow-hidden p-2 gap-2">
						<div className="mx-4 my-2 text-2xl font-bold hover:cursor-pointer">
							{viewModel.draggedList.title}
						</div>
						{viewModel.draggedList.items.map((item, index) => (
							<div
								key={index}
								className="transition-all duration-500 border-2 border-gray-300 bg-white shadow-sm p-2 rounded-lg"
							>
								{item.content}
							</div>
						))}
					</div>
				) : null}
			</DragOverlay>
		</DndContext>
	);
}
