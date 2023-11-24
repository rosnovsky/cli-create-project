import prompts from "prompts";

export const userPrompts = () =>
  prompts([
    {
      type: "select",
      name: "type",
      message: "What are you building?",
      choices: [
        { title: "New CLI", value: "cli" },
        { title: "New Next.js Project", value: "next" },
        { title: "New Rust web server", value: "rust" },
        { title: "Cancel", value: "cancel" },
      ],
    },
  ]).then((res: any) => {
    if (res.type === "cancel") {
      console.log("See you back soon!");
      process.exit(0);
    }
    prompts([
      {
        type: "text",
        name: "name",
        message: "What is the name of your project?",
        initial: "my-project",
        validate: (name: string) => name.length > 0,
      },
    ]).then((res2: any) => {
      prompts([
        {
          type: "select",
          name: "type",
          message: "Initialize git?",
          choices: [
            { title: "Yes", value: "git" },
            { title: "No", value: "noGit" },
          ],
        },
      ]).then((res3: any) => {
        console.log(
          `Building "${res.type}"-type project called "${res2.name}"`,
        );
      });
    });
  });