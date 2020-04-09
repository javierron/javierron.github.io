Hello everyone! Today I'm going to show you how easy it is to create your very own GitHub App hosted as an Azure Functions App!

In order to show how to do this we are going to create a simple bot with the following functionality:
- Each time an issue is opened on the repo, the bot will comment with a 'thank you for opening this issue' message.
- Each time a Pull Request is merged, the bot will comment on the PR with another 'thank you' message.

You will need the following ingredients:

- 1 Azure Account.
- 1/2 cup of C# knwoledge.
- Salt and pepper to taste.

Let's begin!

As you may have guessed, Azure functions is Microsoft's service to provide serverless computing architectures where subscribers can execute code as an event driven Function-as-a-Service (FaaS) without managing the underlying server resources.
