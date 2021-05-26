import Box from '../Box';
import Input from '../form/Input';
import Button from '../form/Button';
import React,
{ useEffect, useState } from 'react';

const SetHeadline = (props) => {
  return (
    <>
      <h1 className="text-2xl text-gray-800 mt-6 mb-5">Start with a strong headline.</h1>
      <form className="h-screen flex flex-col justify-between">
        <section>
          <h3 className="font-semibold text-gray-700">Write a headline for your task post</h3>
          <label htmlFor="newTaskHeadline"></label>
          <Input
            type="text"
            id='newTaskHeadline'
            name='newTask'
            placeholder='Write a headline for your new task'
            className="pl-4 bg-app-bg border border-gray-300 border-solid rounded focus:outline-none focus:ring focus:border-blue-200"
            onChange={props.onChange} />
          {/* show message after the user has entered a valid headline */}
          <div className="flex flex-col mt-5">
            <h4 className="font-semibold text-gray-600">Example titles</h4>
            <ul className="list-disc ml-6 text-sm">
              <li className="my-5">Find the lowest prices in [insert category]</li>
              <li className="my-5">Manage social media posts</li>
              <li className="my-5">Organize data-sheets</li>
            </ul>
          </div>
        </section>
        <Button
          className="bg-gray-300 font-semibold text-gray-600 text-lg rounded-3xl"
          onClick={props.onClick}>Next: Skills</Button>
      </form>
    </>
  )
}

const SetSkills = (props) => {
  return (
    <>
      <h1 className="text-2xl text-gray-800 mt-6 mb-5">
        What skills does your task require?
      </h1>
      <form className="h-screen flex flex-col justify-between">
        <section>
          <h3 className="font-semibold text-gray-700">
            Search skills or add your own
          </h3>
          <label htmlFor="newSkill"></label>
          <Input
            type="text"
            id="newSkill"
            name="newSkill"
            placeholder="Search skills or add your own"
            className="pl-4 bg-app-bg border border-gray-300 border-solid rounded focus:outline-none focus:ring focus:border-blue-200"
            onChange={props.onChange} />
        </section>
        <Button
          className="bg-gray-300 font-semibold text-gray-600 text-lg rounded-3xl"
          onClick={props.onClick}>Next: Rate</Button>
      </form>
    </>
  )
}

const SetRate = (props) => {
  return (
    <>
      <h1 className="text-2xl text-gray-800 mt-6 mb-5">
        Set the hourly rate range
      </h1>
      <form className="h-screen flex flex-col justify-between">
        <section>
          <h3 className="font-semibold text-gray-700">
            Search skills or add your own
          </h3>
          <label htmlFor="newSkill"></label>
          <Input
            type="text"
            id="newSkill"
            name="newSkill"
            placeholder="Search skills or add your own"
            className="pl-4 bg-app-bg border border-gray-300 border-solid rounded focus:outline-none focus:ring focus:border-blue-200"
            onChange={props.onChange} />
        </section>
        <Button
          className="bg-gray-300 font-semibold text-gray-600 text-lg rounded-3xl"
          onClick={props.onClick}>Next: Review</Button>
      </form>
    </>
  )
}

const StepsController = () => {
  const [step, setStep] = useState(0);
  const inc = () => {
    setStep(step + 1);
    console.log("step: ", step)
    if (step > 3) setStep(0);
  }
  // disable button if the user has not entered a valid headline,
  // otherwise, turn the button green and show a message in green
  // font in the area indicated below the input field.
  const setHeadline = (e) => {
    console.log('set headline');
  }
  const setSkills = () => {
    console.log('set skills');
  }
  const setRate = () => {
    console.log('set rate');
  }
  switch (step) {
    case 0:
      return <SetHeadline onChange={setHeadline} onClick={inc} />;
    case 1:
      return <SetSkills onChange={setSkills} onClick={inc} />;
    case 2:
      return <SetRate onChange={setRate} onClick={inc} />;
    case 3:
      return <h1>review your task post</h1>
    default:
      return null;
  }
}

export default function CreateTask() {
  const test = (e) => {
    e.preventDefault();
    console.log(e)
  }


  return (
    <Box>
      <StepsController />
    </Box>
  )
}