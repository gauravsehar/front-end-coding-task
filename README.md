# Front-end coding task

## The task
It is a quiz game in the form of a browser application.

> Variables file is present in `src/config/constants`
> I have my own copy of my API as original keep on returning `Workflow Error`. my personal API copy @ `https://eolnq9n0ealtrwh.m.pipedream.net/`
>>Project is having a optimised API calling method which reduces load on sever by polling only when data is required.

The API is available at `GET https://eok9ha49itquif.m.pipedream.net` and returns questions in the following format:
```json
{
  "questions": [
    {
      "answerSha1": "5c8452354c261b52e6dcf7f94b80ea5a7bceb677",
      "question": "What do people mean when type the letters 'SMH' in a message on the internet?"
    },
    {
      "answerSha1": "088e4a2e6f0c20048cd3e53c639c7092bffb8524",
      "question": "Which country's flag can be described as 'Green with a vertical white band on the left side. The green section contains a white crescent and star.'?"
    },
    {
      "answerSha1": "b79445b10bd5bc34cbebf63355101dbdb420aa0e",
      "question": "Which director directed Gangs of New York?"
    }
    {
      "answerSha1": "fd26fb6ff5aa10eaddad0b2c832139dbe052c9d7",
      "question": "Which philosopher famously said 'This is patently absurd; but whoever wishes to become a philosopher must learn not to be frightened by absurdities'?"
    },
    {
      "answerSha1": "e8002c169040af08d8b4ed2f0d636b840f335f9b",
      "question": "What is Xylology the study of?"
    }
  ]
}
```


## Available Scripts

In the project directory, you can run:

## `npm install`

Project doesnt include node_module package. Install all the dependacies in the project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.