import KanbanBoard from "../components/Widgets/KanbanWidget"; 

const KanbanPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Kanban Board</h1>
      <KanbanBoard />
    </div>
  );
};

export default KanbanPage;
