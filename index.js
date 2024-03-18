const menuItem = {
  id: 'customId',
  text: 'How react hook works?',
  steps: [
    {
      type: window.codioIDE.coachBot.ACTIONS_TYPES.INPUT,
      key: 'userPrompt',
      text: 'Please type hook name below'
    },
    {
      type: window.codioIDE.coachBot.ACTIONS_TYPES.REQUEST,
      requestType: window.codioIDE.coachBot.COACH_BOT_REQUEST_TYPE.CUSTOM
    }
  ],
  defaultData: {systemPrompt: 'Show react documentation about user provided hook'}
}

window.codioIDE.coachBot.register(menuItem)
