interface ListItemProps {
	children?: ReactNode;
	id: UniqueIdentifier;
}

interface ListProps {
	id: string;
	list: KanbanList;
	onTitleChanged?: (newTitle: string) => void;
	onNewCardAdded?: (title: string) => void;
}
