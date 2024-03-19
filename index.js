window.codioIDE.menu.addItem(
    {title: 'Tools'}, 
    {title: 'CoachBot', callback: () => {
            const options = {
                menu: [{
                            id: 'codio-explain-error',
                            text: 'Explain an error',
                            steps: [
                                {
                                    type: window.codioIDE.coachBot.ACTIONS_TYPES.INPUT,
                                    key: 'errorMessage',
                                    text: 'Please paste your error text below'
                                },
                                { 
                                  type: window.codioIDE.coachBot.ACTIONS_TYPES.REQUEST,
                                  requestType: window.codioIDE.coachBot.COACH_BOT_REQUEST_TYPE.EXPLAIN_ERROR
                                }
                            ]
                }, {
                    id: 'customId',
                    text: 'How does react hook work?',
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
                }, {
                    id: 'customId1',
                    text: 'How can I create custom hook?',
                    steps: [
                        {
                            type: window.codioIDE.coachBot.ACTIONS_TYPES.INPUT,
                            key: 'userPrompt1',
                            text: 'Please type your new hook name'
                        },
                        { 
                           type: window.codioIDE.coachBot.ACTIONS_TYPES.REQUEST,
                           requestType: window.codioIDE.coachBot.COACH_BOT_REQUEST_TYPE.CUSTOM
                        }
                    ],
                    defaultData: {systemPrompt: 'Show react documentation about user provided hook'}
                }]
            };
            // set coach bot options
            // window.codioIDE.coachBot.setDefaultOptions(options)
            // open coach bot
            // window.codioIDE.coachBot.open()
            // call coach bot action by id with defaultValues
            // window.codioIDE.coachBot.call({actionId: 'customId'})
            // close coach bot
            // window.codioIDE.coachBot.close()

            // pass options and actionId to immediately call action after open
            window.codioIDE.coachBot.open(options, {actionId: 'customId', actionId1: 'customId1'});

        }
    }
);
