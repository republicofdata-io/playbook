---
id: product_instrumentation
title: Product Instrumentation
sidebar_position: 1
---

Events

User journey and metrics

You need to start from what you want to measure. You shouldn’t capture everything, but whatever will help you measure the performance of your product.

There are a few frameworks to structure your user journey’s key metrics. The most popular one is Pirate Metrics (AARRR): Acquisition + Activation + Retention + Referral + Revenue

For our example, we’ll focus on the following popular metric: user acquisition cost.

Underlying Events and Taxonomy

From metric to events

* A metric can be composed of multiple events
* What are the entities, actions and attributes of those events
* What are the sources required to capture those events



Important to settle on a taxonomy before codifying your events.

* The Object-Action Framework
  * What’s the object (e.g. Song)
  * What is an action that a user can perform on that object (e.g. Played). 
  * Once assembled, we get the following event: Song Played.
  * Other examples:
    * Account Created
    * Product Viewed
* Simple, but important to always respect that framework and keep a glossary of objects and actions.
* Also important to be specific about the casing used. For example:
  * all lower case — account created
  * snake_case — account_created
  * Proper Case — Account Created
  * camelCase — accountCreated
  * Title case — Account created

---

Tracking plan

* Document that lists all events that are being captured on your platform
* Importance is not in its complexity, but that it’s always up to date and well used
* Without a tracking plan, you could drown in captured events that have no strategic importance. Or worse, have multiple events that are named differently but that refer to the same event.



Example from Segment

![](https://lh3.googleusercontent.com/KYkYWgjnNPdYGukvy5i1BgYMO9_dKJyFn1Mb-pHSazXxCQEzBswctE5i5bs5LzikRSLg_ns2CkuXoacf5qshnd_FVobfMPITFmnapBDushnMD_kpiOfp9sb1XwczzXMFHnG-idvwxt8)

Our Own Example

![](https://lh3.googleusercontent.com/aMgJYZR-Md4Jnqz-0jIsEfZxkFoh2oBRUI0V4VoyPgOgFrtrk9kgHCc27bLCMW4ViBjB46urWT5kwafi8Wg37yfMZAnaHXfh5Ns1yMOA8LyffRzp88iOhbTvi07B8rIzBwrY0_qvuDk)

---

Implementation

Customer Data Platforms

* Segment probably the most popular one.
* "We provide a single platform that collects customer data from every user touch point, standardizes and unifies that data in one place, and routes it to hundreds of tools with the flick of a switch.”



![](https://lh3.googleusercontent.com/UZoT9w9VYC2t58ij9KI9a9y9iR5dkS0o3fUVUHHFGTqrMnTO4P_qBL6aUS-15Zj-NequAdaXypuWZrcKzIrbdH8i_79k-gv8H7BVtTb-OfHZqstehYSkr6fBHqjSSCE_AUrNP9s1HVY)

* A Hub Between Sources and Destinations
* Have a look at their catalog: https://segment.com/catalog/

Sources

* “Customer data is any piece of data around how your customers are interacting with your brand or product.”
* 2 types of sources
  * Libraries: for example analytics.js for your website or ruby for your app. Those libraries help you codify the events you want to capture on your platforms.
  * Cloud apps: all 3rd party sources, such as ZenDesk, Intercom, etc. Nothing to codify, they are interfaces to those app’s APIs to transfer and ingest your user’s data.

Destinations

* You can send to multiple destinations to answer different questions or to trigger actions based on events.

Controlling the Quality of Your Implementation

* Control instrumentation with Segment Protocols or with Iteratively
* Iterative.ly
  * “To treat analytics like code, one must treat analytics schema like code”
  * At the foundation of product analytics is a solid tracking plan. This is your strategy to instrument your digital product and perfect implementation is key to realizing that strategy.
  * Tracking plan is a living document that grows as your analytics mature, that is the result of team collaborations.
  * Iterative.ly has recognized from early on that this is an under-served requirement
  * They are building a really solid and elegant solution around this, where you document your tracking and use it to control instrumentation. It now includes version control of that plan.