import VideoCallIcon from '@material-ui/icons/VideoCall';
import EventIcon from '@material-ui/icons/Event';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Home = () => {
  return (
    <main className="flex w-full justify-center text-black">
      <article className="flex flex-col w-full px-2">

        {/* add secondary icons beneath the existing layer of icons */}

        <section className="flex flex-row my-4">
          <FavoriteIcon
            className="text-green-500"
            fontSize="large" />
          <div className="ml-4">
            <h3 className="text-xl mb-3">Hire who you trust</h3>
            <p>Establish trust by having a converstion first with your future assistant before you hire. This will help you find the assistant with the skills needed to help your business run smoothly.</p>
          </div>
        </section>
        <section className="flex flex-row my-4">
          <EventIcon
            className="text-green-500" fontSize="large" />
          <div className="ml-4">
            <h3 className="text-xl mb-3">Stay organized</h3>
            <p>Create a calendar to manage dead-lines. Add and organize tasks by priority to help everyone on the team keep up with your dynamic business.</p>
          </div>
        </section>
        <section className="flex flex-row my-4 justify-between">
          <VideoCallIcon
            className="text-green-500" fontSize="large" />
          <div className="ml-4">
            <h3 className="text-xl mb-3">Communication is key</h3>
            <p>Lets make communication simple during the workday using either video or audio only. Need something done outside hours of operation? Leave a message reminder and link it to your calender. </p>
          </div>
        </section>
      </article>
    </main>
  )
}

export default Home;