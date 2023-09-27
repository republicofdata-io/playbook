---
id: llm_orchestration_frameworks
title: LLM Orchestration Frameworks
sidebar_position: 1
---

Those frameworks provide functionalities to ingest data, index them, spin up a query engine, prompt the data, as well as build agents that will make decisions based on the inferences returned by the models.

A16Z places them dead center in their [emerging LLM app stack](https://a16z.com/emerging-architectures-for-llm-applications/). They abstract away many of the details of prompt chaining.

![A16Z emerging LLM app stack](https://a16z.com/wp-content/uploads/2023/06/2657-Emerging-LLM-App-Stack-R2-1-of-4-2.png)


At the moment, there are 2 major “orchestration” frameworks in that space:
- LangChain
- LLamaIndex

They overlap each other but differ in strengths. And can be complementary as well.

You can [combine LangChain and LLamaIndex](https://towardsdatascience.com/llamaindex-the-ultimate-llm-framework-for-indexing-and-retrieval-fa588d8ca03e) to perform data transformations using the areas of expertise from both frameworks.