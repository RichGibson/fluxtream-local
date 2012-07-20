fluxtream-local
===============

A local server providing local access to Fluxtream data, and to provide an API to your local computer

Fluxtream provides tools for an open-source personal data visualization framework to help you make sense of your life.

http://fluxtream.com

Fluxtream provides connectors to multiple data sources, such as Twitter, Facebook, FitBit, and other tracking and Quantified 
Self systems, a datastore to hold your information in one place, and different ways to corelate and visualize all of this 
information. 

This package, fluxtream-local, uses node to create a local server to let you interact with fluxtream.

Key features (as of inception this is a bit hand wavy in terms of what I want :-)
<li>Allows you to develop fluxtream widgets which will appear on your fluxtream page
<li>Provides an API for you to expose elements of your computer to fluxtream, or other services. You can 
define parts of your file system which you'd like fluxtream-local to track, and then see your file system use 
integrated into your fluxtream timeline. For example, you could see how many words you are writing per day, or how 
much code you are writing.
<li>Features like browser history tracking. (browser state by unique identifers, like laptops versus desktop)

<li>An API to your local system, a dashboard for your life.
