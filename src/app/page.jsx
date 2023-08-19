import TasksList from '@/components/TasksList';

// export const revalidate = 5;
export const dynamic = 'force-dynamic'
function HomaPage() {
  return (
    <section>
      <TasksList />
    </section>
  );
}

export default HomaPage;
