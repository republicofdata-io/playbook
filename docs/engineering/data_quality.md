---
id: data_quality
title: Data Quality
sidebar_position: 4
---

## BI Transformation Process Testing Coverage

### Test Coverage

To provide context, let’s review the BI transformation process and the main layers that are composing it. Below is a graphical representation of how data is being progressively transformed into the public warehouse/BI layer.

![Screen Shot 2020-08-10 at 10.19.49 AM.png](https://codahosted.io/docs/S4IjqJCq2i/blobs/bl-0nlKGel35w/3b964437774727eced6e1b0c3d67317c7f66935edbbeed755f0b1cc867329f3b45ecea7e625b8a519a9d53379f2e4abf76456c10cd36b9701745a6526486fc9507f9ab4b239c2a9edd67f4f8677d66a4fb3e5ac75fe640b4455c0f352a0a669e7fbb5035)

There are essentially 4 types of models in that graph:

1. Sources: Those green models are pointers to the raw data we are consuming.
2. Staging models: This is the first layer of transformation, where we do basic cleaning (renaming, casting to data type, deduplication, filtering, etc.) operations on the source data. This is where our core assumptions about the shape of the data are.
3. Integration models: This layer integrates multiple sources of data to come up with single entities. For example, we might have user information coming in from the product and a CRM. We would integrate those sources together to come up with a single complete view of that entity (users).
4. Warehousing models: This layer creates the public entities (such as users, events, sessions, etc.) that are to be consumed in a BI tool or by analysts.

  

The tests we are putting in place automates a decision process that is enabled at each stage of the BI transformation. Throughout that flow of data, we run different sets of tests that will take 1 of 3 decisions:

- Everything is conforming to expectations, we can proceed to the next stage of transformation
- There are non-major issues in the data that should be looked into, but we can proceed to the next stage of transformation
- There are major issues with the data, we are not to proceed to the next stage of transformation.

This looks a bit like the following…

![efabf651-3bd2-4f1e-a72d-0d51a85e3ea7.png](https://codahosted.io/docs/S4IjqJCq2i/blobs/bl-WTf96jBcoT/06f3678d73425ee3aeecffaf6dd853f7593833a69d1b544ea23b2d4a8aed5d98963e48f50d0e58503701840ae0b0a9d168775fe90768904f090dd2c753136814f027c6d029a643b3e3479af8f288d2551fc9033a2e4ef447ebd47ec05159244e7d3f33f9)

### Protective Layer

The idea of a protection layer is to have a line of defence against non-conforming data and be warned as soon as possible about those issues. For this purpose, we are introducing a suite of tests that inspects data and validates they conform to our assumptions.

An example of that is that we could have check that a timestamp field:

- Actually exists and is named created_ts
- Is a datetime type
- Is never null
- Its value is never beyond the current date
- Etc.

In dbt, we can test for all of those assumptions in what is called schema tests.

There are multiple types of schema tests. See dbt’s and dbt_util’s documentations:

- [dbt schema tests](https://docs.getdbt.com/docs/building-a-dbt-project/tests/)
- [dbt_utils schema tests](https://github.com/fishtown-analytics/dbt-utils)

  

It should be noted that it’s fairly easy to create your own schema tests. For example, we use a accepted_value_range custom schema test, which checks that a numeric value is within a certain range.

---

## Down with Pipeline debt / Introducing Great Expectations

- [https://medium.com/@expectgreatdata/down-with-pipeline-debt-introducing-great-expectations-862ddc46782a](https://medium.com/@expectgreatdata/down-with-pipeline-debt-introducing-great-expectations-862ddc46782a)
- "Like other forms of technical debt, pipeline debt accumulates when unclear or forgotten assumptions are buried inside a complex, interconnected codebase."
- "It’s easy for debt to accumulate in data pipelines, since…
- - Data systems naturally evolve to become more interconnected [...] In a DAG context, “silo-free” is isomorphic to “tangled and messy.” Your pipelines wants to be a hairball, and your PMs, execs, and customers agree.
    - Data pipelines cross team borders [...] Most organizations are set up so that new models, dashboards, etc. require at least one analyst-to-engineer handoff before they make it to production. The difference in skill set and tools creates tons of surface area for pipeline debt to creep in."
- "Pipeline debt introduces both productivity costs and operational risk."
- "This kind of bugginess erodes trust, sometimes to the point of putting the core usefulness of the data system in doubt. What good is a dashboard/report/prediction/etc if you don’t trust what it says?"
- "Instead of just testing code, we should be testing data. After all, that’s where the complexity lives."
- "Intuitively, we know that pipeline testing is a good idea. However, the practice of pipeline testing is missing two very important things. First, shared vocabulary for describing and reasoning about pipeline debt and pipeline tests. Second, effective, open tools for implementing pipeline testing in practice."

---

## Observability for Data Engineering

- [https://medium.com/databand-ai/observability-for-data-engineering-a2e826587205](https://medium.com/databand-ai/observability-for-data-engineering-a2e826587205)
- "For companies with serious data infrastructure, the lack of specialized management tools leads to major inefficiencies and productivity gaps."
- "The reason standard tools don’t cut it is because data pipelines behave very differently than software applications and infrastructure."
- "Here are some best practices we recommend to begin:
- - Make incremental investments in data/metadata collection from your DAGs.
    - Define pipeline regression tests and track your test metrics.
    - Define & monitor standard KPIs that you can align all roles on — data engineers, analysts, and scientists."

---

## Data testing: why you need it and how to get started

- [https://blog.getdbt.com/data-testing-why-you-need-it-and-how-to-get-started/](https://blog.getdbt.com/data-testing-why-you-need-it-and-how-to-get-started/)
- "The data team had no way to keep tabs on all the changes happening in the business, so they spent an enormous amount of time reacting to problems as end users reported them. And every problem eroded trust."
- "What if instead of reacting, you could put proactive systems in place that would give you visibility into data problems before those changes impacted the end user? This is mindset that software engineers use to build systems for high reliability."
- "Data testing is the practice of making assertions about your data, and then testing whether these assertions are valid. This concept can be used to test both the quality of your source data and to validate that the code in your data models is working as intended."
- "Tim Finkel calls this “building the immune system.”"
- Test during different phases
- - Development
    - - "Sources: Use simple schema tests like uniqueness and not_null to check for data quality and test your basic assumptions about the source data"
        - "Staging models: Transformation tests to make sure you didn't create duplicates or fan out a join"
        - "dim/fact models: Test core business logic using relationship test, expression tests, recency tests, etc."
        - "Across models: ex: making sure all orders contain at least one order from a certain product category"
    - Pull Requests
    - - "Whenever a Pull Request is made against our internal-analytics repo, dbt Cloud will kick off a job that builds and tests all models in your development branch in a scratch schema"
    - In Production
    - - "Automated tests ensure that when something changes about your business or the data, you – not your end user – are the first to know."

---

## How great data teams test their data models

- [https://blog.getdbt.com/how-great-data-teams-test-their-data-models/](https://blog.getdbt.com/how-great-data-teams-test-their-data-models/)
- If you're wondering how to tackle data testing, there are worst ways to proceed than to read advices from very smart people in that field.