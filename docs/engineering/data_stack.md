---
id: data_stack
title: Data Stack
sidebar_position: 2
---

## Modern approach to analytics architecture

### Current data architectures

- Some factors that influence the variety in current data architectures
- - Volumes, complexity, velocity
    - Privacy concerns
    - Point of consumptions (BI tools, API, apps, etc.)
- Many ingredients to the mix
- - Big proprietary tools such as Cognos
    - Python-driven ETL or other big proprietary ETL tools
    - BI on top of datasets
    - R, SAS, etc. to take care of the whole process
- Tradeoffs to each choice
- - Quality
    - Speed
    - Robustness

### Standard that emerges

![](https://lh3.googleusercontent.com/dmdYvoZgD_AgsEDUmdUkDs8UPLWVaWSvB1Ws38KNs1G8kahkweaj0xOM2iiPyfvw7YnA8QKjYF1iY5SDckRQTY3fmNsJ-_0WnuoKM8PPLBHiQmUGq0aPz_DQHV1mhqFEdz0yDyNupd4)

### Principles

- Modularity
- Do one thing only and do it well (Unix philosophy)
- SQL first
- - Standardized
    - Built for data
    - Widely adopted

### Taking advantage of cloud-based data warehouses

- Redshift, BigQuery and now Snowflake
- Storage is cheap… and so is compute (somewhat)
- ETL vs ELT

---

## Data Transformations

### dbt

![](https://lh6.googleusercontent.com/7x1WrUNMTUEVPn0gOetkPtfpjVca_z4PVrbVLVE-3_yIkEqL5a79gE6CJbjcmyUmc-qJ0u-nCxOckVJGyNdf9ZtITfiu9IC8PNUmm_hCDLlXr50cfde2Extytdd6urKYG-a1Hhc9ehc)

- Foundational to dbt are sql queries.
- Each query performs a single transformation, a single select.
- Models refer to others for further transformations.
- For example
- - Source
    - Cleaning
    - Business logic
    - Entities
    - Metrics

### DAG - Directed Acyclic Graph

You can run a DAG over and over again and get the same results

![](https://lh5.googleusercontent.com/T4LJv3jtzPGdQcEPo9Z_D57KsQhMAwMIsa-58lMFOot4GO8F96nDEE7MFJrdkxyggJ_r455Bcs7yvwBTPvWer9iGERTinxt2BGBJD2N9AU5fLMqsnGOXzQC87cv1mmx6hN6zPIm_Jfg)

(Graph by ...)

- It’s directed because models are built on top of others in a forward-moving sequence.
- It’s acyclic because it only goes forward. There are no cycles.
- It’s a graph because it represents an order of execution that is driven by model relationships.

### Dimensional modeling

- [https://towardsdatascience.com/guide-to-data-warehousing-6fdcf30b6fbe](https://towardsdatascience.com/guide-to-data-warehousing-6fdcf30b6fbe)

### Enabling DataOps

- Version Control & Code Review
- Automated Testing
- Source integrity and freshness
- Transformation expectations (TDD)
- Entity tables quality assurance
- Metric performance monitoring
- Sandboxing & Environments
- Auto-generated documentation of your data
- Continuous integration

### SQL on Steroids

- All the things you love from SQL
- All the powerful functions that are available with modern warehouses
- Introducing more structure (by enforcing a project’s DAG)
- Control of materializations (ephemeral, view, table, incremental)
- Jinja is a scripting language for more programmability
- - If/Else - For loops
    - Variables
    - Macros