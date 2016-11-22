---
title: Starting your IoT product
date: 2016-11-21 00:00:00 +00:00
page-title: Starting your IoT product
layout: blog
meta-post-type: Blog-Type
author: Tobin Harris
description: How you can start an IoT product
image: https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1024&refresh=2592000&url=https://pocketworks-website.s3.amazonaws.com/lights.jpg
---

If you're company has a great idea for a product involving IoT, this will help you understand the issues involved in getting your ideas off the ground and taking a product to market.

<!--more-->

## A brave new world

Creating an IoT product may be a departure from your existing line of business. For example, you might be a manufacturer who doesn't currently offer any software or hardware products.

You probably have some great ideas, a track record in your industry, some successful products and very skilled people. However, IoT product development may require new skills to get the hardware and software components designed and assembled.

In the early phases of your product development, you'll probably want to test the market to make sure your concept is well received by potential customers. It will be more cost effective and faster to do this without hiring a whole new department. Instead, you'll be looking for outside expertise to get you moving.

## Finding the right people to help

IoT projects require a certain skill base to get started. Some of these you'll already have, and other's you'll need to hire in.

Note that you might not need all of these at once. Many companies start by prototyping and then work up from there.

Firstly, here are the skills you might already have in-house:

* Industry expertise to understand the problem your solving for your customers, and a solution idea you believe will work
* A sales team to talk to customers and see how they respond to your ideas
* An existing customer base to test your early prototypes with

And some skills you're most likely to need to outsource initially:

* Embedded device experts who design the PCB
* Embedded software experts who develop the software to run on your devices
* Cloud software experts who provide or develop cloud software or web portals
* Data experts who provide or develop software for storing and reporting on large amounts of collected data
* Mobile software experts who can develop usable mobile experiences

## The anatomy of an IoT solution

Before embarking on you IoT project, you will want to make sure you include the core components in your plan and budget. Every IoT solution is different, but here is one typical setup we've seen time and time again.

### Sensor Hardware & Software

This might be a sensor that detects impacts, or changes in temperature or whatever else you want to detect. Technically it doesn't have to be a sensor, it might be a button or actuator of some kind. It might be wearable or mounted in a fixed position. Most are battery powered. And, they need to somehow connect to the internet to send their messages. Usually this happens using a low powered radio such as Zig-Bee to send data to the gateway (see below).

### Gateway Hardware & Software

A gateway device typically sits between your swarm of sensors, and the internet. For example, you might have 1,000 sensors in a retail department store that collect customer footfall data, and these need to send that data to the cloud so it can be used for something useful. The gateway facilitates that communication. It tends to have GSM, WiFi or wired ethernet connectivity.

### Cloud Data Collection Software

You'll have a cloud solution that receives data from your gateway. This will be secure and capable of handling large amounts of data, especially if you plan to deploy a lot of sensors. You may also be interested in using machine learning to add some intelligence to your product offering.

You have a choice of building your own or selecting an out-of-the-box solution. If you build your own, you will have more control over the visual appearance and the features included in your solution. If you select a ready-made solution, you will get to market faster and perhaps with less cost. That said, many teams can build IoT solutions very quickly using modern tools such as Elixir and the Phoenix framework.

### Cloud Reports and Control Panel Software

Most IoT solutions add value by turning data collected into useful reports and insights. Often this data is displayed on a control panel. On top of that, you'll want an online portal where your customers can setup access permissions, configure any settings and export backups of data.

### Mobile App Software

For many IoT products, customers will need to interact with the solution whilst away from their laptop or desktop computer. So, you'll want to have a mobile offering, be it a native app or progressive mobile site. The mobile app could existing to receive alerts, or it could be there to assist with setting up the devices. In some cases, you might not have a cloud portal and instead do everything through the mobile app.

## Prototyping to success

Pulling all these skills and components together is going to be necessary at some point, but there are also options for the short term too.

* Have a company develop prototypes using commodity hardware such as Arduino and Rasberry Pi
* Use a ready-made cloud such as Samsung SmarThings cloud or ThingWorx for data. There are over 120 vendors of IIoT cloud solutions to chose from. Creating your own cloud solution might also not be as hard as you think.
* Prototype your mobile applications on a single platform, such as Android

## How Pocketworks can help

We're experts at creating software solutions that underpin IoT projects. Our strengths are in mobile and cloud development, and prototyping IoT solutions. We help companies explore idea and take IoT products to market. 
