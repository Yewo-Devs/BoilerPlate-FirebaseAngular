namespace API.Application.Interfaces
{
	public interface IChatGptService
	{
		Task<string> Prompt(string prompt);
    }
}
