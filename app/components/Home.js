import AssistantIcon from '@material-ui/icons/Assistant';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PostAddIcon from '@material-ui/icons/PostAdd';

const Home = () => {
  return (
    <main className="flex w-full justify-center text-black relative">
      <article className="flex flex-col w-11/12">
        <section className="flex flex-row my-4">
          <AssistantIcon
            fontSize="large" />
          <p>Hire the assistant with the skills to help you run your business smoothly.</p>
        </section>
        <section className="flex flex-row my-4">
          <ScheduleIcon fontSize="large" />
          <p>Create a calendar to manage your scheduled dead-lines.</p>
        </section>
        <section className="flex flex-row my-4 justify-between">
          <PostAddIcon fontSize="large" />
          <p>Bill by the task or group all tasks into one invoice. The choice is yours.</p>
        </section>
      </article>
    </main>
  )
}

export default Home;