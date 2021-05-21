import Box from '../Box';
import Input from '../form/Input';
import Button from '../form/Button';
import { useEffect, useState } from 'react';

export default function CreateTask(props) {

  const test = (e) => {
    e.preventDefault();
    console.log(e)
  }

  // disable button if the user has not entered a valid headline
  const setHeadline = (e) => {
    console.log(e.target.value)
  }

  return (
    <Box>
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
            onChange={setHeadline} />
        </section>

        <Button
          className="bg-red-300 font-semibold text-gray-600 text-lg rounded-3xl"
          onClick={test}>Next: Skills</Button>

      </form>
    </Box>
  )
}