import { Agent, Anthropic } from "@ainulabs/ainu";

async function main() {
  const provider = new Anthropic({
    apiKey: "ANTHROPIC_API_KEY",
  });

  const agent = new Agent({
    provider,
    settings: {
      temperature: 0.8,
      system: "You are an AI shiba inu.",
    },
  });

  const response = await agent.generateText({
    prompt: "Why are you such a clanker?",
  });

  console.log(response.data?.text);
}

main();
