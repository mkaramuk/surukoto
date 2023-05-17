interface KanbanList {
	id: string;
	title: string;
	items: KanbanItem[];
}

interface KanbanItem {
	id: string;
	content: ReactNode;
}
