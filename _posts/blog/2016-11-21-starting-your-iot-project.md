---
title: Starting your IoT product
date: 2016-11-21 00:00:00 +00:00
description: How you can start an IoT product
image: https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1024&refresh=2592000&url=https://pocketworks-website.s3.amazonaws.com/lights.jpg
meta-post-type: Blog-Type
client: Advice for Newcomers
page-title: Considerations for your IoT product
author: Tobin Harris
layout: blog
---

If your company has a great idea for a product involving IoT, this will help you understand the issues involved in getting your ideas off the ground and taking a product to market.

<!--more-->

## A brave new world

Creating an IoT product may be a new thing for your company. You might be a manufacturer who builds physical products and who is yet to take a software and IoT-based product to market.

You probably have some good ideas on how you can add intelligent hardware and software to your existing offering, and a track record of delivering innovative products in your industry. However, IoT product development may require you to employ new skills to get the hardware and software components designed and assembled.

In the early phases of your product development, you'll probably want to test the market to make sure your concept is well received by potential customers. It will be more cost effective and faster to do this without hiring a whole new department. Instead, you'll be looking for outside expertise to get you moving.

## Finding the right people to help

IoT projects require a certain skill base to get started. Some of these you'll already have, and other's you'll need to hire in.

Note that you might not need all of these at once. Many companies start by prototyping and then work up from there.

Firstly, here are the skills you might already have in-house:

* Industry expertise to understand the problem you're solving for your customers, and a solution idea you believe will work
* A sales team to talk to customers and see how they respond to your ideas
* An existing customer-base to test your early prototypes with

And some skills you're most likely to need to outsource initially:

* Embedded device experts who design the hardware and enclosures
* Embedded software experts who develop the software to run on your devices
* Cloud software experts who provide or develop cloud software or web portals
* Data experts who provide or develop software for storing and reporting on large amounts of collected data
* Mobile software experts who can develop mobile applications that are simple and usable for your target audience

## Understanding the anatomy of an IoT solution

Before embarking on you IoT project, it is important to make sure you include the right things in your plan and budget. Every IoT solution is different, but it is likely your project plan will need to include the following elements.

### Sensor Hardware & Software

This might be a sensor that detects impacts, or changes in temperature or whatever else you want to detect. Technically it doesn't have to be a sensor, it might be a button or actuator of some kind. It might be wearable or mounted in a fixed position. Most are battery powered. And, they need to somehow connect to the internet to send their messages. Usually, this happens using a low powered radio such as Zig-Bee to send data to the gateway (see below).

### Gateway Hardware & Software

A gateway device typically sits between your swarm of sensors and the internet. For example, you might have 1,000 sensors in a retail department store that collect customer footfall data, and these need to send that data to the cloud so it can be used for something useful. The gateway facilitates that communication. It tends to have GSM, WiFi or wired ethernet connectivity.

### Cloud Data Collection Software

You'll have a cloud solution that receives data from your gateway. This will be secure and capable of handling large amounts of data, especially if you plan to deploy a lot of sensors. You may also be interested in using machine learning to add some intelligence to your product offering.

You have a choice of building your own or selecting an out-of-the-box solution. If you build your own, you will have more control over the visual appearance and the features included in your solution. If you select a ready-made solution, you will get to market faster and perhaps with less cost. That said, many teams can build IoT solutions very quickly using modern tools such as Elixir and the Phoenix framework.

### Cloud Reports and Control Panel Software

Most IoT solutions add value by turning data collected into useful reports and insights. Often this data is displayed on a control panel. On top of that, you'll want an online portal where your customers can set up access permissions, configure any settings and export backups of data.

### Device Management
Once you've installed hundreds or thousands of your smart hardware devices on premise, you'll need a way to manage them. For example, you might need to roll out new software to fix a bug. Or you might need to troubleshoot a device when a customer calls you with a problem. This aspect of IoT is called device management. It's a relatively immature field and there are lots of approaches you can take.

### Mobile Apps

For many IoT products, customers will need to interact with the solution whilst away from their laptop or desktop computer. So, you'll want to have a mobile offering, be it a native app or progressive mobile site. The mobile app could be designed to receive alerts, or it could be there to assist with setting up the devices. In some cases, you might not have a cloud portal and instead, do everything through the mobile app.

### Certification (Important!)

If you want to use your IoT hardware in a commercial or consumer setting in the UK, all your hardware components will need to be certified. For example, say you have a Rasberry Pi and attach a GSM modem to it, you need to make sure both of these components are certified (the Pi is).

Before going to market you'll need to put your _combined_ components into certification as a whole. This is why it's so important to ensure all components are certified. If one of them is not certified, then you're combined solution won't make it through certification.

When starting a new project, it's important to pay great attention to this otherwise your project schedule will be at risk as you get bogged down with finding new components or waiting for your component manufacturers to sort things out.



## Prototyping to success

Pulling all these skills and components together is going to be necessary at some point, but there are also options for the short term too.

* Have a company develop prototypes using commodity hardware such as Arduino and Rasberry Pi
* Use a ready-made cloud such as Samsung SmarThings cloud or ThingWorx for data. There are over 120 vendors of IIoT cloud solutions to choose from. Creating your own cloud solution might also not be as hard as you think.
* Prototype your mobile applications on a single platform, such as Android

## How Pocketworks can help

We're experts at creating software solutions that underpin IoT projects. Our strengths are in mobile and cloud development, and prototyping IoT solutions. We help companies explore their ideas to take IoT products to market.
