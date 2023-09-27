---
id: test_coverage
title: Test Coverage
sidebar_position: 2
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