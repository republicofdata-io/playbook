---
id: improve_context
title: Improve Context
sidebar_position: 2
---

As you work on augmenting your data platform with large language models, you quickly hit a limit in the prompt context that allows a model to answer questions that are relevant to your data. Let's look at the problem and solutions.

## Prompt Context

Models are limited by the number of tokens you can pass in your prompt. You would usually pack that prompt with context before asking a question. Something like:

```text title="Example prompt"
Given this overview of the Canada Convoy Protest:

'A series of protests and blockades in Canada against COVID-19 vaccine mandates and restrictions, called the Freedom Convoy (French: Convoi de la liberté) by organizers, began in early 2022. The initial convoy movement was created to protest vaccine mandates for crossing the United States border, but later evolved into a protest about COVID-19 mandates in general. Beginning January 22, hundreds of vehicles formed convoys from several points and traversed Canadian provinces before converging on Ottawa on January 29, 2022, with a rally at Parliament Hill. The convoys were joined by thousands of pedestrian protesters. Several offshoot protests blockaded provincial capitals and border crossings with the United States.'

Can you tell me if the following article talks about those protests, either the event itself, the actors, the aftermaths, etc. Answer stricly by either 'True' or 'False'.

#####

Article summary: {summary}
```

The advantage of this approach is its simplicity, but the drawbacks are obviously the limitations in terms of contextual data you can pass in that prompt. 

## Model fine-tuning

This is beyond our knowledge and for good reasons. You can fine-tune models on your data, but that requires expertise in machine learning, which might not be the case for us poor analytics engineers. But just know that this is the most robust option if you have the in-house expertise and resources.

## In-Context Learning

In-context learning is about "extending" that context before actually querying the model. That means you would start a thread and pass contextual statements first. As long as you are working with a chat model that retains context, then this is probably the least complex approach to extend the context without tackling model fine-tuning.

This solution works for small datasets that you want to pass as context. In my "Freedom Convoy" prompt example above, this would probably be the best approach as I only want to pass a few articles that provide contextual data about the event I'm covering.

## Retrieval Augmented Generation (RAG)

This one is a bit more complex but allows you to work with more contextual data. The idea is that you would vectorize your data and store that in a vector database. Then whenever a query is sent, an LLM would first retrieve the relevant documents from your vector database to help answer that question. Those retrieved documents are then used as the context to answer your query.

This diagram from [Heiko Hotz](https://towardsdatascience.com/rag-vs-finetuning-which-is-the-best-tool-to-boost-your-llm-application-94654b1eaba7) gives a good overview of how you would architect such an approach.

![RAG architecture](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*Jq9bEbitg1Pv4oASwEQwJg.png)

This requires more engineering but is probably the most appropriate solution for working with larger datasets.