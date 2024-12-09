using API.Application.Interfaces;
using OpenAI;
using OpenAI.Chat;
using OpenAI.Models;

namespace API.Infrastructure.Services
{
	public class ChatGptService: IChatGptService
	{
		private readonly string OpenAiApiKey = Environment.GetEnvironmentVariable("OpenAi_Api_Key");
		private readonly OpenAIClient _chatGpt;
		public ChatGptService()
        {
			_chatGpt = new OpenAIClient(OpenAiApiKey);
		}

		public async Task<string> Prompt(string prompt)
		{
			var messages = new List<Message>
			{
				new Message(Role.User, prompt),
			};

			var chatRequest = new ChatRequest(messages, Model.GPT4o);
			var response = await _chatGpt.ChatEndpoint.GetCompletionAsync(chatRequest);

			var choice = response.FirstChoice;
			return ($"[{choice.Index}] {choice.Message.Role}: {choice.Message} | Finish Reason: {choice.FinishReason}");
		}
	}
}
