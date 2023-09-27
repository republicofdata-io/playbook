---
id: data_quality_assessment
title: Data Quality Assessment
sidebar_position: 1
---

I've been working on the discursus.io project for a while now. I've just gone through a refactoring of how the project harvests and processes the GDELT data to represent social movements. I'm now at a point where I want to conduct a thorough data quality assessment of the data I'm producing.

[DQM dashboard collage]

Let's go over the process below, the assessment itself and the takeaways.

---

## Data Products

The discursus.io project is a data platform that processes raw data, performs enhancements, transforms it and exposes data through an API.

![discursus data mesh](https://cdn-images-1.medium.com/max/2400/1*ck8wQspcasKxpoeNFDcZ2g.png)

The data platform is built around 5 data products:
- Public sources: which is where we scrape public sources
- Pre-process: this is where we clean, prepare and enhance the data from public sources
- Core entities: this is where we transform the data into the data warehouse entities
- API: which is where we expose the entities, attributes and relationships for public consumption
- Monitoring dashboard: this is a public app where users can explore social movements, events, actors, narratives, etc.

The following sections cover the main quality attributes we are assessing in our dashboard.


## Source Integrity

This ensures that the data we're starting with is reliable and representative, which is critical for the accuracy of our end product.

### Data Volumes

Where we quantify the amount of data we are collecting, tracking the number of sources and the volume of data points gathered from each.

![](https://cdn-images-1.medium.com/max/2400/1*ApwBwQOwmpC7mZ3Fxg9_jA.png)

A few observations:
- Top 2 sources are aggregators

### Source Credibility

Where we measure the reliability of each media source. It is cross-verified against the Media Bias / Fact Check website.

A few observations:
- Our data quality assessment covers the last 28 days of our data. This applies to the above metrics and all the following ones.
- The MBFC website doesn't provide any handy API or extract. So we had to rely on a 3rd party extract that has data from around 4000 media sources. That may sound a lot, but that still means that we have close to half our article sources for which we didn't have any MBFC data. We excluded those, which may well be distorting our results.
- But overall, we do seem to have highly credible sources that populate our data platform.

### Coverage

Where we estimate the extent to which our data sources capture a representative snapshot of the information landscape pertaining to social movements.

A few observations:
- We definitely have a left-leaning bias in media coverage. That said, it might be reflective of the media landscape as a whole.
- Seems like our media type distribution is pretty balanced.
- As for geographical distribution, articles are mainly sourced from the US and Canada, which is expected considering our focus on North American social movements.


## Processing Validation

This stage ensures that our preprocessing and transformation processes are effectively maintaining and enhancing the quality of the data, preparing it for further analysis without compromising its integrity or introducing errors.

### Data Cleaning

Where we verify the removal or correction of any inaccuracies, inconsistencies, or errors in the raw data, ensuring its readiness for subsequent processing and analysis.

### Data Transformation

Where we validate the procedures that alter and standardize the data into an appropriate format for further analysis, ensuring these transformations maintain data quality and integrity.


## Element Quality Control

By checking structural and content aspects, we ensure the individual elements of your data meet our quality standards.

Structural profiling: Check the structure and format of data output.

Content Profiling: Analyze the values in our data.


## Composite Quality Assurance

Looking at relationships, completeness, and accuracy of our output. It ensures data is not only good on a granular level but also when viewed as a whole.

Relationship Profiling: Identify and verify the relationships and dependencies between different data elements.

Data Completeness: Ensure our final product doesn't have missing values or incomplete data.

Data Accuracy: Cross-verify our output data with some reliable external sources.


## Timeliness and Availability

Checking the timeliness ensures that not only is our data of high quality but it's also being updated and delivered to users in a timely fashion.

Data Timeliness: As data refreshes multiple times per day, ensure that it's showing the most recent data.
